import './App.css';
import Header from './components/Header';
import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { light } from './components/Theme';
import Slider from './components/Slider';
import PreviewProducts from './components/PreviewProducts';
import TrendingRecipes from './components/TrendingRecipes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <div className="App">
        <GlobalStyle />
        <Header />
        <Slider />
        <PreviewProducts />
        <TrendingRecipes />
      </div>
    </ThemeProvider>
  );
}

export default App;
