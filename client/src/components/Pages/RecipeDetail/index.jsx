import {
  Content,
  RecipeContainer,
  RecipeTitle,
  AboutDetaill,
  Image,
  Description,
  IngreAndNutri,
  Ingredients,
  Nutrition,
  Directions,
  ListStep,
  StepItem,
  NumberStep,
  StepContent,
  DescContent,
} from './RecipeDetailStyles';
import TitleBar from '../../TitleBar';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BsCheck2Square } from 'react-icons/bs';
import {
  Header,
  Title,
  ShortLine,
} from '../../TrendingRecipes/TrendingRecipesStyles';
import { RightSide } from '../Category/CategoryStyles';
import LatestRecipes from '../../LatestRecipes';
import RecipeCategories from '../../RecipeCategories';
import { useState } from 'react';

const RecipeDetail = () => {
  const params = useParams();
  const [fullDesc, setFullDesc] = useState(false);

  return (
    <>
      <TitleBar
        mainTitle="Detail Recipe"
        pageList={[
          params.category,
          'Sultan Dines Kacchi Recipes Sultan Kacchi Recipes',
        ]}
      />
      <Content>
        <RecipeContainer>
          <RecipeTitle>
            <h2>Sultan Dines Kacchi Recipes Sultan Kacchi Recipes</h2>
          </RecipeTitle>
          <AboutDetaill>
            <li>
              <FaRegCalendarAlt />
              Feb 22, 2022
            </li>
            <li>
              Recipe by <span>Tan Pil</span>
            </li>
            <li>
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <span>3/5</span>
            </li>
          </AboutDetaill>
          <Image>
            <img
              src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2020/06/ranna-wordpress-theme-radiustheme.com-9.jpg"
              alt=""
            />
          </Image>
          <Description>
            <Header>
              <Title>Recipe Description</Title>
              <ShortLine />
            </Header>
            <DescContent full={fullDesc ? 1 : 0}>
              <p>
                The doner is a Turkish creation of meat, often lamb, but not
                necessarily so, that is seasoned, stacked in a cone shape, and
                cooked slowly on a vertical rotisserie. As the outer layers of
                the meat cooks, it’s shaved off and served in a pita or other
                flatbread with vegetables and sauce. Doner is the “mother,” as
                it were, of Arabic shawarma, Mexican al pastor, and the popular
                Greek gyros. Although the sliced meat can be served on a platter
                with rice and cooked vegetables, it’s most popular as a sandwich
                eaten as fast street food. You might find tomatoes, lettuce,
                cucumbers, red onion, cucumbers, or pickles inside the pita, and
                the sauce might be Greek yogurt-based tzatziki or Middle Eastern
                tahini. Making an authentic doner kebab at home can be a bit
                tricky although still possible if you have the set up for a slow
                cooking vertical rotating spit. For most home kitchens, however,
                some improvisation will be required. But the flavors and spices
                will be easier to recreate than the exact shape. You can form
                ground lamb into balls and thread them on skewers, but the
                easiest way to get the sliced look of a street doner kebab is to
                make a sort of meatloaf.
              </p>
              <span onClick={() => setFullDesc(!fullDesc)}>
                Read {fullDesc ? 'Less' : 'More'}{' '}
              </span>
            </DescContent>
          </Description>
          <IngreAndNutri>
            <Ingredients>
              <Header>
                <Title>Recipe Ingredients</Title>
                <ShortLine />
              </Header>
              <ul>
                <li>
                  <BsCheck2Square />
                  <span>1 kg lamb</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>4 gm Garlic</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>1 gm coriander</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>1 gm paprika</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>1/2 spoon salt</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>5 kg Meat</span>
                </li>
                <li>
                  <BsCheck2Square />
                  <span>25 spoon Tomato Mashed</span>
                </li>
              </ul>
            </Ingredients>
            <Nutrition>
              <Header>
                <Title>Recipe Nutrition</Title>
                <ShortLine />
              </Header>
              <ul>
                <li>Percents</li>
                <li>
                  <span>Total Fat: 45.8g</span>
                  <span>32%</span>
                </li>
                <li>
                  <span>Chlosterols: 224mg</span>
                  <span>75%</span>
                </li>
                <li>
                  <span>Sodium: 149mg</span>
                  <span>44%</span>
                </li>
                <li>
                  <span>Vitamin D: 2ng</span>
                  <span>2%</span>
                </li>
                <li>
                  <span>Water : 150ml</span>
                  <span>3%</span>
                </li>
              </ul>
            </Nutrition>
          </IngreAndNutri>
          <Directions>
            <Header>
              <Title>Recipe Directions</Title>
              <ShortLine />
            </Header>
            <p>
              You can make the kebab at home. The homemade version of your
              favourite Chicken Doner Kebab! Tastes remarkably similar to the
              diner kebab meat from your favourite takeout store. I've baked it,
              but imagine it rotisserie style over the BBQ or charcoal! You will
              need 4 long metal skewers for this, around 30cm / 12" long.
            </p>
            <ListStep>
              <StepItem>
                <NumberStep>
                  <div>
                    <p>Step 1</p>
                  </div>
                </NumberStep>
                <StepContent>
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/bread-brunch-candle-1345190-1240x578.jpg"
                    alt=""
                  />
                  <p>
                    Mix Marinade in a large bowl. Add chicken and mix to coat
                    well. Cover and marinate in the fridge for a minimum of 3
                    hours, 24 hours is ideal. If only 3 hours, add an extra 1/2
                    tsp salt.
                  </p>
                </StepContent>
              </StepItem>
              <StepItem>
                <NumberStep>
                  <div>
                    <p>Step 2</p>
                  </div>
                </NumberStep>
                <StepContent>
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/2dding-adult-apron-1537166-1240x578.jpg"
                    alt=""
                  />
                  <p>
                    Preheat oven to 220C / 430F (standard) or 200C / 390F (fan /
                    convection) for 7 Minutes. Choose a pan of a size such that
                    the skewers will stay propped up on the pan walls (see
                    photos in post or video) and the chicken will be elevated
                    off the base. Line with foil.
                  </p>
                </StepContent>
              </StepItem>
              <StepItem>
                <NumberStep>
                  <div>
                    <p>Step 3</p>
                  </div>
                </NumberStep>
                <StepContent>
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/adult-bar-cook-321588-1240x578.jpg"
                    alt=""
                  />
                  <p>
                    Place the mixture into a loaf pan and cook in the oven for
                    approximately 30 minutes or until the top is a light golden
                    brown.
                  </p>
                </StepContent>
              </StepItem>
              <StepItem>
                <NumberStep>
                  <div>
                    <p>Step 4</p>
                  </div>
                </NumberStep>
                <StepContent>
                  <img
                    src="https://radiustheme.com/demo/wordpress/themes/ranna/wp-content/uploads/2019/07/bake-bakery-baking-9510-1240x578.jpg"
                    alt=""
                  />
                  <p>
                    Prop the 2 skewers on the edges of the baking pan. Drizzle
                    surface with oil. Bake for [step_time sec="2100"]35
                    minutes[/step_time] or until the surface is golden with some
                    charred bits (char is good!). Spoon the pan juices over the
                    chicken. Then turn, drizzle with oil and bake for 20 minutes
                    (or 25 - 30 minutes if you had large thighs). If you need /
                    want more colour, switch to grill/broil for a few minutes on
                    high - I don't do this. Baste again with pan juices and
                    stand for 5 minutes. Carving: Stand the skewers upright or
                    on an angle, and slice meat fairly thinly. Use to make Doner
                    Kebabs or Kebab Plates.
                  </p>
                </StepContent>
              </StepItem>
            </ListStep>
          </Directions>
        </RecipeContainer>
        <RightSide>
          <LatestRecipes />
          <RecipeCategories />
        </RightSide>
      </Content>
    </>
  );
};

export default RecipeDetail;
