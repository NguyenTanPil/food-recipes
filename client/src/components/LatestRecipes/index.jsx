import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
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

const LatestRecipes = ({ title, remdRecipes }) => {
  const [latProducts, setLatProducts] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        let queryRecipes;
        if (remdRecipes) {
          queryRecipes = query(
            collection(db, 'recipes'),
            where('id', 'in', remdRecipes),
          );
        } else {
          queryRecipes = query(
            collection(db, 'recipes'),
            orderBy('createdAt', 'desc'),
            limit(3),
          );
        }
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
  }, [remdRecipes]);

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <ShortLine />
      </Header>
      <Products>
        {latProducts.map((product) => (
          <ProductContainer key={product.id}>
            <ProductHeader>
              <Link to={`/${product.category}/${product.id}`}>
                <img src={product.thumbnail} alt="" />
              </Link>
            </ProductHeader>
            <ProductBody>
              <h3>
                <Link to={`/${product.category}`}>{product.category}</Link>
              </h3>
              <span>
                <Link to={`/${product.category}/${product.id}`}>
                  {product.name}
                </Link>
              </span>
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
