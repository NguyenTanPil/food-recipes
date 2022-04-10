import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recomRecipes: [],
  listReviews: [],
};

const recomRecipesSlice = createSlice({
  name: 'recomRecipes',
  initialState,
  reducers: {
    updateRecommendationRecipes(state, action) {
      state.recomRecipes = action.payload;
    },
    updateListRecipes(state, action) {
      state.listReviews = action.payload;
    },
  },
});

export const { updateRecommendationRecipes, updateListRecipes } =
  recomRecipesSlice.actions;

export const selectRecomRecipes = (state) => state.recomRecipes;
export const selectlistReviews = (state) => state.listReviews;

export default recomRecipesSlice.reducer;
