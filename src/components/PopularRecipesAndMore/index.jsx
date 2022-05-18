import CategoriesAndLatestRecipe from '../CategoriesAndLatestRecipe';
import PopularRecipes from '../PopularRecipes';
import { Container } from './PopularRecipesAndMore';

const PopularRecipesAndMore = () => {
  return (
    <Container>
      <PopularRecipes />
      <CategoriesAndLatestRecipe />
    </Container>
  );
};

export default PopularRecipesAndMore;
