import { Container, Categories, CategoryItem } from './RecipeCategoriesStyles';
import {
  Header,
  Title,
  ShortLine,
} from '../TrendingRecipes/TrendingRecipesStyles';
import { NavLink } from 'react-router-dom';

const RecipeCategories = () => {
  return (
    <Container>
      <Header>
        <Title>Recipe Categories</Title>
        <ShortLine />
      </Header>
      <Categories>
        <CategoryItem>
          <NavLink to="/breakfast">Breakfast</NavLink>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/lunch">Lunch</NavLink>
          <span>(2)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/dinner">dinner</NavLink>
          <span>(2)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/drink">Drink</NavLink>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/pizza">Pizza</NavLink>
          <span>(1)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/pasta">pasta</NavLink>
          <span>(1)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/salad">Salad</NavLink>
          <span>(3)</span>
        </CategoryItem>
        <CategoryItem>
          <NavLink to="/rezala ">Rezala </NavLink>
          <span>(2)</span>
        </CategoryItem>
      </Categories>
    </Container>
  );
};

export default RecipeCategories;
