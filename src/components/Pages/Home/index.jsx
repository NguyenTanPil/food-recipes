import PopularRecipesAndMore from '../../PopularRecipesAndMore';
import PreviewProducts from '../../PreviewProducts';
import Slider from '../../Slider';
import TrendingRecipes from '../../TrendingRecipes';

const Home = () => {
  return (
    <>
      <Slider />
      <PreviewProducts />
      <TrendingRecipes />
      <PopularRecipesAndMore />
    </>
  );
};

export default Home;
