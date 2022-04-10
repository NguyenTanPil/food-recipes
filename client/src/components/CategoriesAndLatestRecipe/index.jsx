import LatestRecipes from '../LatestRecipes';
import RecipeCategories from '../RecipeCategories';
import { Container } from './CategoriesAndLatestRecipeStyles';

const CategoriesAndLatestRecipe = () => {
  return (
    <Container>
      <LatestRecipes title={'Latest Recipes'} />
      <RecipeCategories />
    </Container>
  );
};

export default CategoriesAndLatestRecipe;
