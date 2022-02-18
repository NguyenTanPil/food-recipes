import { Container, Products } from './LatestRecipesStyles';
import {
  Header,
  Title,
  ShortLine,
} from '../TrendingRecipes/TrendingRecipesStyles';
import {
  Container as ProductContainer,
  Header as ProductHeader,
  Body as ProductBody,
} from '../Product/ProductStyles';
import { AiOutlineClockCircle } from 'react-icons/ai';

const LatestRecipes = () => {
  return (
    <Container>
      <Header>
        <Title>Latest Recipes</Title>
        <ShortLine />
      </Header>
      <Products>
        <ProductContainer>
          <ProductHeader>
            <img
              src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-6-150x150.jpg"
              alt=""
            />
          </ProductHeader>
          <ProductBody>
            <h3>Pasta</h3>
            <span>Spiced Pork and Pasta</span>
            <p>
              {' '}
              <AiOutlineClockCircle /> Feb 23, 2022
            </p>
          </ProductBody>
        </ProductContainer>
        <ProductContainer>
          <ProductHeader>
            <img
              src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-3-150x150.jpg"
              alt=""
            />
          </ProductHeader>
          <ProductBody>
            <h3>Drink</h3>
            <span>Pumpkin Cheese cake With Gingersnap Crust</span>
            <p>
              {' '}
              <AiOutlineClockCircle /> Feb 21, 2022
            </p>
          </ProductBody>
        </ProductContainer>
        <ProductContainer>
          <ProductHeader>
            <img
              src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog13-150x150.jpg"
              alt=""
            />
          </ProductHeader>
          <ProductBody>
            <h3>Drink</h3>
            <span>Product JUICE Blueberry Juice with Lemon</span>
            <p>
              {' '}
              <AiOutlineClockCircle /> Feb 13, 2022
            </p>
          </ProductBody>
        </ProductContainer>
      </Products>
    </Container>
  );
};

export default LatestRecipes;
