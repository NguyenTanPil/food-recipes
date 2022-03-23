import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { ShortLine } from '../TrendingRecipes/TrendingRecipesStyles';
import {
  ContentReview,
  DetailReview,
  ReplyContainer,
  ReplyInput,
  ReviewContainer,
  ReviewHeader,
  ReviewItem,
  Reviews,
  UserAvatar,
} from './RecipeReviewStyles';

const RecipeReview = () => {
  const [actionType, setActionType] = useState('review');

  const handleAutoHeight = (e) => {
    e.target.style.height = '0';
    const height = e.target.scrollHeight;
    e.target.style.height = `${height}px`;
  };

  return (
    <Reviews>
      <ReviewHeader>
        <h3>Recipe Reviews</h3>
        <ShortLine />
      </ReviewHeader>
      <ReviewContainer>
        {actionType === 'review' && (
          <ReplyInput>
            <div>
              <UserAvatar>
                <a href="!#">
                  <img
                    src="https://avatars.githubusercontent.com/u/70946877?v=4"
                    alt=""
                  />
                </a>
              </UserAvatar>
              <textarea
                placeholder="Write a review..."
                onInput={(e) => handleAutoHeight(e)}
              ></textarea>
              <button>
                <AiOutlineSend />
              </button>
            </div>
          </ReplyInput>
        )}
        <ReviewItem>
          <UserAvatar>
            <a href="!#">
              <img
                src="https://avatars.githubusercontent.com/u/70946877?v=4"
                alt=""
              />
            </a>
          </UserAvatar>
          <ContentReview>
            <div>
              <a href="!#">
                <h4>Felix Nguyen</h4>
              </a>
              <p>
                Using the baking parchment to help, roll the cake in the
                marzipan, pressing gently to secure and trimming away any excess
                at the join
              </p>
            </div>
          </ContentReview>
          <DetailReview>
            <span onClick={() => setActionType('reply')}>Reply</span>
            <span>3/13/2022</span>
          </DetailReview>
          {actionType !== 'review' && (
            <ReplyInput>
              <p>
                <span>
                  Reply to <a href="!#">Felix Nguyen</a>
                </span>
                <button onClick={() => setActionType('review')}>
                  <IoIosClose />
                </button>
              </p>
              <div>
                <UserAvatar>
                  <a href="!#">
                    <img
                      src="https://avatars.githubusercontent.com/u/70946877?v=4"
                      alt=""
                    />
                  </a>
                </UserAvatar>
                <textarea
                  placeholder="Reply now..."
                  onInput={(e) => handleAutoHeight(e)}
                ></textarea>
                <button>
                  <AiOutlineSend />
                </button>
              </div>
            </ReplyInput>
          )}
          <ReplyContainer>
            <ReviewItem>
              <UserAvatar>
                <a href="!#">
                  <img
                    src="https://avatars.githubusercontent.com/u/70946877?v=4"
                    alt=""
                  />
                </a>
              </UserAvatar>
              <ContentReview>
                <div>
                  <a href="!#">
                    <h4>Felix Nguyen</h4>
                  </a>
                  <p>
                    Trim the ends to neaten. Dust with icing sugar just before
                    serving.
                  </p>
                </div>
              </ContentReview>
              <DetailReview>
                <span onClick={() => setActionType('reply')}>Reply</span>
                <span>3/13/2022</span>
              </DetailReview>
            </ReviewItem>
          </ReplyContainer>
        </ReviewItem>
        <ReviewItem>
          <UserAvatar>
            <a href="!#">
              <img
                src="https://avatars.githubusercontent.com/u/70946877?v=4"
                alt=""
              />
            </a>
          </UserAvatar>
          <ContentReview>
            <div>
              <a href="!#">
                <h4>Felix Nguyen</h4>
              </a>
              <p>
                Using the baking parchment to help, roll the cake in the
                marzipan, pressing gently to secure and trimming away any excess
                at the join
              </p>
            </div>
          </ContentReview>
          <DetailReview>
            <span onClick={() => setActionType('reply')}>Reply</span>
            <span>3/13/2022</span>
          </DetailReview>
        </ReviewItem>
      </ReviewContainer>
    </Reviews>
  );
};

export default RecipeReview;
