import {
  Container,
  ProductItem,
  Header,
  Body,
  EntryMeta,
} from './PreviewProductsStyles';
import { FaUserCheck } from 'react-icons/fa';
import { AiFillClockCircle, AiFillHeart } from 'react-icons/ai';

const PreviewProducts = () => {
  return (
    <Container>
      <ProductItem>
        <Header>
          <img
            src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-11-530x338.jpg"
            alt=""
          />
        </Header>
        <Body>
          <h3>Rezala</h3>
          <span>Sultan Dines Kacchi Recipes Sultan Kacchi Recipes</span>
          <p>
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is seasoned, stacked in a cone
          </p>
          <EntryMeta>
            <li>
              <FaUserCheck />
              <span>by</span>
            </li>
            <li>
              <AiFillClockCircle />
              <span>Mins</span>
            </li>
            <li>
              <AiFillHeart />
              <span>Like</span>
            </li>
          </EntryMeta>
        </Body>
      </ProductItem>
      <ProductItem>
        <Header>
          <img
            src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-11-530x338.jpg"
            alt=""
          />
        </Header>
        <Body>
          <h3>Rezala</h3>
          <span>Sultan Dines Kacchi Recipes Sultan Kacchi Recipes</span>
          <p>
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is seasoned, stacked in a cone
          </p>
          <EntryMeta>
            <li>
              <FaUserCheck />
              <span>by</span>
            </li>
            <li>
              <AiFillClockCircle />
              <span>Mins</span>
            </li>
            <li>
              <AiFillHeart />
              <span>Like</span>
            </li>
          </EntryMeta>
        </Body>
      </ProductItem>
      <ProductItem>
        <Header>
          <img
            src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-11-530x338.jpg"
            alt=""
          />
        </Header>
        <Body>
          <h3>Rezala</h3>
          <span>Sultan Dines Kacchi Recipes Sultan Kacchi Recipes</span>
          <p>
            The doner is a Turkish creation of meat, often lamb, but not
            necessarily so, that is seasoned, stacked in a cone
          </p>
          <EntryMeta>
            <li>
              <FaUserCheck />
              <span>by</span>
            </li>
            <li>
              <AiFillClockCircle />
              <span>Mins</span>
            </li>
            <li>
              <AiFillHeart />
              <span>Like</span>
            </li>
          </EntryMeta>
        </Body>
      </ProductItem>
    </Container>
  );
};

export default PreviewProducts;
