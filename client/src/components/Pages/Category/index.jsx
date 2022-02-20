import { Products, Content, RightSide, NoProducts } from './CategoryStyles';
import TitleBar from '../../TitleBar';
import Product from '../../Product';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
import { useParams } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';

const data = [
  {
    id: 1,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog16-630x517.jpg',
    name: 'Sunday Best Fruit Salad with best recipe writer',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly',
    category: 'Dinner',
  },
  {
    id: 2,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog2-630x517.jpg',
    name: 'Take away recipe for couple',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, and cooked slowly',
    category: 'Dinner',
  },
  {
    id: 3,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog6-630x517.jpg',
    name: 'Chanterelle and Porcini Mush room Recipes',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Dinner',
  },
  {
    id: 4,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog6-630x517.jpg',
    name: 'Pumpkin Cheese cake With Gingersnap Crust',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Drink',
  },
  {
    id: 5,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog13-630x517.jpg',
    name: 'Product JUICE Blueberry Juice with Lemon Crema',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Drink',
  },
  {
    id: 6,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-7-630x517.jpg',
    name: 'Salami Oven Roasted are Mozzarella Oelette',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Drink',
  },
  {
    id: 7,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-630x517.jpg',
    name: 'Kale Quinoa and Avocado Salad with Lemon Dijon',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Breakfast',
  },
  {
    id: 8,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog17-630x517.jpg',
    name: 'Dijon Quinoa and Avocado Salad with Lemon Kale',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Breakfast',
  },
  {
    id: 9,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna-wordpress-theme-radiustheme.com-4-630x517.jpg',
    name: 'Fresh Broccoli Salad with best recipe writer in',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Breakfast',
  },
  {
    id: 10,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/ranna_wordpress_theme_radiustheme.com_1-630x517.jpg',
    name: 'Apple Salad with Lemon rice and cooked vegetables',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Lunch',
  },
  {
    id: 11,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog8-630x517.jpg',
    name: 'Kale Quinoa and Avocado Salad with Lemon Dijon',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Lunch',
  },
  {
    id: 12,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-6-630x517.jpg',
    name: 'Spiced Pork and Pasta',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Pasta',
  },
  {
    id: 13,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/photo-1574071318508-1cdbab80d002-630x517.jpg',
    name: 'Pizza Bar Mozzarella',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Pizza',
  },
  {
    id: 14,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-9-630x517.jpg',
    name: 'Sultan Dines Kacchi Recipes Sultan Kacchi Recipes',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Rezala',
  },
  {
    id: 15,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/blog15-630x517.jpg',
    name: 'Baked Garlic & Chilli Prawn Foody',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Rezala',
  },
  {
    id: 16,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog4-630x517.jpg',
    name: 'Lemon Dijon Vina igrette Kale Quinoa, and Avocado',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Salad',
  },
  {
    id: 17,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-11-630x517.jpg',
    name: 'Lemon Dijon Vina igrette Kale Quinoa, and Avocado',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Salad',
  },
  {
    id: 18,
    img: 'https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/09/blog9-630x517.jpg',
    name: 'Turkey Kofta Kabobs with best recipe writer in',
    desc: 'The doner is a Turkish creation of meat, often lamb, but not necessarily so, that is seasoned, stacked in a cone shape, that is seasoned, stacked in a cone shape,',
    category: 'Salad',
  },
];

const Category = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    const fetchProducts = () => {
      setProducts(
        data.filter(
          (item) =>
            item.category.toLocaleLowerCase() ===
            params.category.toLocaleLowerCase(),
        ),
      );
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for smoothly scrolling
      });
    };

    fetchProducts();
    scrollToTop();
  }, [params.category]);

  return (
    <>
      <TitleBar
        oneLine
        mainTitle={params.category}
        pageList={[params.category]}
      />
      <Content>
        <Products>
          {products.length > 0 ? (
            products.map((product) => {
              return (
                <Product
                  key={product.id}
                  img={product.img}
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
    </>
  );
};

export default Category;
