import { Container, Categories, CategoryItem } from './RecipeCategoriesStyles';
import {
  Header,
  Title,
  ShortLine,
} from '../TrendingRecipes/TrendingRecipesStyles';

const RecipeCategories = () => {
  return (
    <Container>
      <Header>
        <Title>Recipe Categories</Title>
        <ShortLine />
      </Header>
      <Categories>
        <CategoryItem>
          <a href="#">Breakfast</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Lunch</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Drink</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Pizza</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">pasta</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Salad</a>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <a href="#">Coffee</a>
          <span>(3)</span>
        </CategoryItem>
      </Categories>
    </Container>
  );
};

export default RecipeCategories;
