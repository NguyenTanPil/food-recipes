import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import loadingImg from '../../../assets/gif-loading-icon-16.jpg';
import db from '../../../firebase';
import Product from '../../Product';
import TitleBar from '../../TitleBar';
import { Content } from '../Category/CategoryStyles';
import { LoadingShape } from '../RecipeDetail/RecipeDetailStyles';
import { Products } from '../Recipes/RecipesStyles';
import { ResultAmount, SearchBox } from './SearchStyles';

const Search = () => {
  const [displayRecipes, setDisplayRecipes] = useState([]);
  const [totalRecipes, setTotalRecipes] = useState([]);
  const [searchString, setSearchString] = useState('');

  const handleSearch = () => {
    const products = [...totalRecipes];
    const newProducts = products.filter((product) => {
      const regex = new RegExp(searchString, 'gi');
      return product.name.match(regex);
    });

    setDisplayRecipes(newProducts);
  };

  useEffect(() => {
    let isSubscribed = true;

    const fetchProducts = async () => {
      let response = [];

      try {
        let queryRecipes = query(collection(db, 'recipes'));

        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          response.push({ ...doc.data() });
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        setDisplayRecipes(response);
        setTotalRecipes(response);
      }
    };

    fetchProducts();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <>
      <TitleBar mainTitle="Search Recipes" pageList={['Search']} />
      <SearchBox>
        <div>
          <input
            type="text"
            placeholder="Type to Search..."
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            onInput={handleSearch}
          />
          <button onClick={handleSearch}>
            <BiSearchAlt />
          </button>
        </div>
      </SearchBox>
      <Content>
        {totalRecipes.length === 0 ? (
          <LoadingShape>
            <img src={loadingImg} alt="" />
          </LoadingShape>
        ) : (
          <>
            <ResultAmount>
              {searchString.length ? (
                <span>
                  {displayRecipes.length} Results For{' '}
                  <span>{searchString}</span>{' '}
                </span>
              ) : (
                <span>Search in {totalRecipes.length} recipes</span>
              )}
            </ResultAmount>
            <Products>
              {displayRecipes.map((product) => (
                <div key={product.id}>
                  <Product {...product} />
                </div>
              ))}
            </Products>
          </>
        )}
      </Content>
    </>
  );
};

export default Search;
