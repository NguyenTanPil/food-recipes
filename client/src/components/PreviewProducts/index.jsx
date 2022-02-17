import Product from '../Product';
import { Container } from './PreviewProductsStyles';

const PreviewProducts = () => {
  return (
    <Container>
      <Product
        img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog16-530x338.jpg"
        name="Sunday Best Fruit Salad"
        desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
        category="Dinner"
      />
      <Product
        img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna_wordpress_theme_radiustheme.com_1-530x338.jpg"
        name="Sunday Best Fruit Salad"
        desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
        category="Dinner"
      />
      <Product
        img="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-530x338.jpg"
        name="Sunday Best Fruit Salad"
        desc="The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape,"
        category="Dinner"
      />
    </Container>
  );
};

export default PreviewProducts;
