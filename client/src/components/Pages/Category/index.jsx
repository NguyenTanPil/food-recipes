import { Products, Content, RightSide, NoProducts } from './CategoryStyles';
import TitleBar from '../../TitleBar';
import Product from '../../Product';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
import { useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import db from '../../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { LoadingShape } from '../RecipeDetail/RecipeDetailStyles';

const Category = () => {
  const params = useParams();
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
        setProducts(response);
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
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    img={product.thumbnail}
                    name={product.name}
                    desc={product.desc}
                    category={product.category}
                  />
                );
              })
            ) : (
              <NoProducts>
                <h3>Don't have product! Please choose other category</h3>
              </NoProducts>
            )}
          </Products>
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
