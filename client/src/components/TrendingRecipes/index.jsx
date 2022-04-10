import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import Product from '../Product';
import {
  Container,
  Header,
  ProductIntro,
  Products,
  ShortLine,
  Title,
} from './TrendingRecipesStyles';
import loadingImg from '../../assets/gif-loading-icon-16.jpg';
import { LoadingShape } from '../Pages/RecipeDetail/RecipeDetailStyles';

const TrendingRecipes = () => {
  const [trendTopProducts, setTrendTopProducts] = useState([]);
  const [trendProducts, setTrendProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(
          collection(db, 'recipes'),
          orderBy('stars', 'desc'),
          limit(4),
        );
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setTrendProducts(response[0]);
        response.splice(0, 1);
        setTrendTopProducts(response);
        setLoading(false);
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
        <Title>Trending Recipes</Title>
        <ShortLine />
      </Header>
      {loading ? (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      ) : (
        <>
          <ProductIntro>
            <Product {...trendProducts} />
          </ProductIntro>
          <Products>
            {trendTopProducts.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </Products>
        </>
      )}
    </Container>
  );
};

export default TrendingRecipes;
