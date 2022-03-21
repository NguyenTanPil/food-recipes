import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import { selectUser } from '../../../features/userSlice';
import db from '../../../firebase';
import Pagination from '../../Pagination';
import Product from '../../Product';
import TitleBar from '../../TitleBar';
import { Content } from '../Category/CategoryStyles';
import { NoHaveHover } from '../Profile/ProfileStyleds';
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
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();

  const [productsByDisplay, setProductsByDisplay] = useState([]);
  const [productsByFilter, setProductsByFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      const response = [];

      try {
        let queryRecipes = query(
          collection(db, 'recipes'),
          orderBy('createdAt', 'desc'),
        );
        if (location.pathname.slice(1) === 'save') {
          const recipeListSaved = user.savedList.map(
            (recipe) => recipe.recipeId,
          );

          queryRecipes = query(
            collection(db, 'recipes'),
            where('id', 'in', recipeListSaved),
          );
        }
        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ ...doc.data() });
        });

        // sort by saved timestamp
        if (location.pathname.slice(1) === 'save') {
          response.sort((a, b) => {
            const aSaved = user.savedList.find(
              (recipe) => recipe.recipeId === a.id,
            );
            const bSaved = user.savedList.find(
              (recipe) => recipe.recipeId === b.id,
            );
            return bSaved.savedAt - aSaved.savedAt;
          });
        }
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

    if (location.pathname.slice(1) === 'save') {
      if (user.savedList.length > 0) {
        fetchProducts();
      } else {
        setLoading(false);
      }
    } else {
      fetchProducts();
    }

    return () => {
      isSubscribed = false;
    };
  }, [location.pathname, user.savedList]);

  useEffect(() => {
    if (location.pathname.slice(1) === 'save') {
      if (!user.id) {
        navigate('/login', { state: { prev: '/save' } });
      }
    }
  }, [user, location.pathname, navigate]);

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
      <TitleBar
        oneLine
        mainTitle={
          location.pathname.slice(1) === 'save'
            ? 'Saved Recipes'
            : 'All recipes'
        }
        pageList={
          location.pathname.slice(1) === 'save' ? ['save'] : ['recipes']
        }
      />
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
            {productsByDisplay.length === 0 ? (
              <NoHaveHover>
                <CgUnavailable />
                <span>No recipes found</span>
              </NoHaveHover>
            ) : (
              <>
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
              </>
            )}
          </Content>
        </>
      )}
    </>
  );
};

export default Recipes;
