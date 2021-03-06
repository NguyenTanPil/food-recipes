import { collection, getDocs, query, where } from 'firebase/firestore';
import { useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import db from '../../../firebase';
import LatestRecipes from '../../LatestRecipes';
import Product from '../../Product';
import RecipeCategories from '../../RecipeCategories';
import TitleBar from '../../TitleBar';
import { LoadingShape } from '../RecipeDetail/RecipeDetailStyles';
import { Content, NoProducts, Products, RightSide } from './CategoryStyles';
import Pagination from '../../Pagination';
const minProducsInPage = 8;

const Category = () => {
  const params = useParams();
  const originProducts = useRef();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(
          collection(db, 'recipes'),
          where('category', '==', params.category.replace('-', ' ')),
        );
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setProducts(response.filter((_, index) => index < minProducsInPage));
        originProducts.current = response;
        setLoading(false);
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smoothly scrolling
      });
    };

    fetchProducts();
    scrollToTop();

    return () => {
      isSubscribed = false;
    };
  }, [params.category]);

  return (
    <>
      <TitleBar
        oneLine
        mainTitle={params.category.replace('-', ' ')}
        pageList={[params.category.replace('-', ' ')]}
      />
      {loading ? (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      ) : (
        <Content>
          <Products>
            {products.length > 0 ? (
              products.map((product) => {
                return <Product key={product.id} {...product} />;
              })
            ) : (
              <NoProducts>
                <h3>Don't have product! Please choose other category</h3>
              </NoProducts>
            )}
          </Products>
          {originProducts.current.length > minProducsInPage && (
            <Pagination
              data={originProducts.current}
              setProducts={setProducts}
              limitProduct={minProducsInPage}
            />
          )}
          <RightSide>
            <LatestRecipes />
            <RecipeCategories />
          </RightSide>
        </Content>
      )}
    </>
  );
};

export default Category;
