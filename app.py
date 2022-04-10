from flask import Flask, json, request
from flask.helpers import send_from_directory
from flask_cors import CORS, cross_origin
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
  cols = [
      'total_fat',
      'sugars',
      'sodium',
      'protein',
      'saturated_fat'
  ]
  # get data
  data = json.loads(request.data)
  df = pd.DataFrame(data['recipes'])
  df['saturated_fat'] = df['saturated_fat'].astype(np.float32)
  ser = pd.Series(data=data['curr'], index=cols).astype(np.float32)

  cal = df.pivot_table(columns='recipeId',values=['saturated_fat', 'total_fat', 'sugars', 'sodium', 'protein'])

  similar = cal.corrwith(ser)
  corr = pd.DataFrame(similar, columns=['Correlation'])
  corr.dropna(inplace=True)
  corrBySort = corr.sort_values('Correlation', ascending=False)

  return {
    "remdRecipes": corrBySort.iloc[1:4].index.to_list()
  }

@app.route('/')
@cross_origin()
def serve():
  return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)