import Product from '../Product';
import {
  Container,
  Header,
  ProductIntro,
  Products,
  Title,
  ShortLine,
} from './TrendingRecipesStyles';

const TrendingRecipes = () => {
  return (
    <Container>
      <Header>
        <Title>Trending Recipes</Title>
        <ShortLine />
      </Header>
      <ProductIntro>
        <Product
          img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog16-530x338.jpg"
          name="Sunday Best Fruit Salad"
          desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
          category="Dinner"
        />
      </ProductIntro>
      <Products>
        <Product
          img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-530x338.jpg"
          name="Sunday Best Fruit Salad"
          desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
          category="Dinner"
        />
        <Product
          img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-9-530x338.jpg"
          name="Sunday Best Fruit Salad"
          desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
          category="Dinner"
        />
        <Product
          img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-6-530x338.jpg"
          name="Sunday Best Fruit Salad"
          desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
          category="Dinner"
        />
        <Product
          img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog16-530x338.jpg"
          name="Sunday Best Fruit Salad"
          desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
          category="Dinner"
        />
      </Products>
    </Container>
  );
};

export default TrendingRecipes;
