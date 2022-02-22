import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import db from '../../../firebase';
import Pagination from '../../Pagination';
import Product from '../../Product';
import TitleBar from '../../TitleBar';
import { Content } from '../Category/CategoryStyles';
import { LoadingShape } from '../RecipeDetail/RecipeDetailStyles';
import {
  FilterProducts,
  Option,
  Products,
  SelectCategory,
} from './RecipesStyles';

const categories = [
  'breakfast',
  'dinner',
  'drinks',
  'dessert',
  'lunch',
  'side dish',
  'snack',
  'starter',
];

const Recipes = () => {
  const originProducts = useRef();
  const [productsByDisplay, setProductsByDisplay] = useState([]);
  const [productsByFilter, setProductsByFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        const queryRecipes = query(collection(db, 'recipes'));
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setProductsByDisplay(response.filter((_, index) => index < 9));
        setProductsByFilter(response);
        originProducts.current = response;
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const handleFilters = (category) => {
    let newFilters;

    if (filters.includes(category)) {
      newFilters = filters.filter((filter) => filter !== category);
    } else {
      newFilters = [...filters, category];
    }

    let newProducts = originProducts.current;
    if (newFilters.length === 0) {
      newProducts = originProducts.current;
    } else {
      newProducts = originProducts.current.filter((product) =>
        newFilters.includes(product.category),
      );
    }

    setFilters(newFilters);
    setProductsByDisplay(newProducts.filter((_, index) => index < 9));
    setProductsByFilter(newProducts);
  };

  return (
    <>
      <TitleBar oneLine mainTitle="All Recipes" pageList={['recipes']} />
      {loading ? (
        <LoadingShape>
          <img src={loadingImg} alt="" />
        </LoadingShape>
      ) : (
        <>
          <FilterProducts>
            <span>Filter by</span>
            <SelectCategory>
              {categories.map((category) => (
                <Option
                  key={category}
                  active={filters.includes(category) ? 1 : 0}
                >
                  <div onClick={() => handleFilters(category)}>
                    <span>{category}</span>
                  </div>
                </Option>
              ))}
            </SelectCategory>
          </FilterProducts>
          <Content>
            <Products>
              {productsByDisplay.map((product) => (
                <div key={product.id}>
                  <Product
                    id={product.id}
                    img={product.thumbnail}
                    name={product.name}
                    desc={product.desc}
                    category={product.category}
                  />
                </div>
              ))}
            </Products>
            {productsByFilter.length > 9 && (
              <Pagination
                data={productsByFilter}
                setProducts={setProductsByDisplay}
              />
            )}
          </Content>
        </>
      )}
    </>
  );
};

export default Recipes;
