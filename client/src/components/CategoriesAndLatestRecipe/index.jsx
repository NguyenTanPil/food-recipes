import RecipeCategories from '../RecipeCategories';
import LatestRecipes from '../LatestRecipes';
import { Container } from './CategoriesAndLatestRecipeStyles';

const CategoriesAndLatestRecipe = () => {
  return (
    <Container>
      <LatestRecipes />
      <RecipeCategories />
    </Container>
  );
};

export default CategoriesAndLatestRecipe;
