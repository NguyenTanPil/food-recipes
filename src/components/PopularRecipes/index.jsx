import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import Product from '../Product';
import {
  Header,
  ShortLine,
  Title,
} from '../TrendingRecipes/TrendingRecipesStyles';
import { Container, Products } from './PopularRecipesStyles';

const PopularRecipes = () => {
  const [popProducts, setPopProducts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(
          collection(db, 'recipes'),
          orderBy('reviews', 'desc'),
          limit(3),
        );
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setPopProducts(response);
      }
    };

    fetchProducts();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        <Title>Popular Recipes</Title>
        <ShortLine />
      </Header>
      <Products>
        {popProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </Products>
    </Container>
  );
};

export default PopularRecipes;
