import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import recomRecipesReducer from '../features/recomRecipeSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    recomRecipes: recomRecipesReducer,
  },
});
