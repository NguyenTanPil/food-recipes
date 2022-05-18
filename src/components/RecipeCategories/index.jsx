import { Container, Categories, CategoryItem } from './RecipeCategoriesStyles';
import {
  Header,
  Title,
  ShortLine,
} from '../TrendingRecipes/TrendingRecipesStyles';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import db from '../../firebase';

const RecipeCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchCategories = async () => {
      let response = [];

      try {
        const queryRecipes = query(collection(db, 'recipes'));

        const querySnapshot = await getDocs(queryRecipes);

        querySnapshot.forEach((doc) => {
          const currentCategory = response.find((category) => {
            return category.name === doc.data().category;
          });

          if (currentCategory) {
            response = response.map((category) => {
              if (category.name === currentCategory.name) {
                return { ...category, count: category.count + 1 };
              }
              return category;
            });
          } else {
            response.push({
              name: doc.data().category,
              count: 1,
            });
          }
        });
      } catch (error) {
        console.log('Error: ' + error.message);
      }

      if (isSubscribed) {
        response.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (b.name > a.name) {
            return -1;
          }
          return 0;
        });
        setCategories(response);
      }
    };

    fetchCategories();

    return () => {
      isSubscribed = false;
    };
  }, []);

  return (
    <Container>
      <Header>
        <Title>Recipe Categories</Title>
        <ShortLine />
      </Header>
      <Categories>
        {categories.length > 0 &&
          categories.map((category, index) => (
            <CategoryItem key={index}>
              <NavLink to={`/${category.name.replace(' ', '-')}`}>
                {category.name}
              </NavLink>
              <span>({category.count})</span>
            </CategoryItem>
          ))}
      </Categories>
    </Container>
  );
};

export default RecipeCategories;
