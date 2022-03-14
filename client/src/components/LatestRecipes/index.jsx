import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import db from '../../firebase';
import {
  Body as ProductBody,
  Container as ProductContainer,
  Header as ProductHeader,
} from '../Product/ProductStyles';
import {
  Header,
  ShortLine,
  Title,
} from '../TrendingRecipes/TrendingRecipesStyles';
import { Container, Products } from './LatestRecipesStyles';

const LatestRecipes = () => {
  const [latProducts, setLatProducts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(
          collection(db, 'recipes'),
          orderBy('desc', 'desc'),
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
        setLatProducts(response);
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
        <Title>Recommends For You</Title>
        <ShortLine />
      </Header>
      <Products>
        {latProducts.map((product) => (
          <ProductContainer key={product.id}>
            <ProductHeader>
              <img src={product.thumbnail} alt="" />
            </ProductHeader>
            <ProductBody>
              <h3>{product.category}</h3>
              <span>{product.name}</span>
              <p>
                {' '}
                <AiOutlineClockCircle /> Feb 23, 2022
              </p>
            </ProductBody>
          </ProductContainer>
        ))}
      </Products>
    </Container>
  );
};

export default LatestRecipes;
