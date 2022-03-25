import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import Review from '../Review';
import ReviewInput from '../ReviewInput';
import { ShortLine } from '../TrendingRecipes/TrendingRecipesStyles';
import { ReviewContainer, ReviewHeader, Reviews } from './RecipeReviewStyles';

const RecipeReview = ({ user, recipeId }) => {
  const [actionType, setActionType] = useState('review');
  const [reviewContent, setReviewContent] = useState('');
  const [reviewList, setReviewList] = useState([]);
  const [parentReply, setParentReply] = useState('');

  const handleAutoHeight = (e) => {
    e.target.style.height = '0';
    const height = e.target.scrollHeight;
    e.target.style.height = `${height}px`;
  };

  const handleCreateReview = async () => {
    const data = {
      recipeId: recipeId,
      review: reviewContent,
      userAvatar: user.avatar,
      userId: user.id,
      userName: user.name,
      createdAt: new Date().getTime(),
    };

    if (reviewContent) {
      const docRef = await addDoc(collection(db, 'reviews'), data);
      setReviewList([{ ...data, id: docRef.id }, ...reviewList]);
      setReviewContent('');
    } else {
      console.log('Review is empty');
    }
  };

  const handleSetReplyParent = (parentId) => {
    setParentReply(parentId);
    setActionType('reply');
  };

  useEffect(() => {
    let isSubscribed = true;

    const fetchReviews = async () => {
      let response = [];

      try {
        const queryReview = query(
          collection(db, 'reviews'),
          where('recipeId', '==', recipeId),
        );
        const reviewSnap = await getDocs(queryReview);

        reviewSnap.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });

        response.sort((a, b) => b.createdAt - a.createdAt);
      } catch (error) {
        console.log('Error', error.message);
      }

      if (isSubscribed) {
        setReviewList(response);
      }
    };

    fetchReviews();

    return () => {
      isSubscribed = false;
    };
  }, [recipeId]);

  return (
    <Reviews>
      <ReviewHeader>
        <h3>Recipe Reviews</h3>
        <ShortLine />
      </ReviewHeader>
      <ReviewContainer>
        {actionType === 'review' && (
          <ReviewInput
            reviewContent={reviewContent}
            currentUserAvatar={user.avatar}
            setReviewContent={setReviewContent}
            handleAutoHeight={handleAutoHeight}
            handleSubmit={handleCreateReview}
          />
        )}
        {reviewList.map((reviewItem) => {
          return (
            <Review
              key={reviewItem.id}
              review={reviewItem}
              currentUser={user}
              reviewContent={reviewContent}
              actionType={actionType}
              parentReply={parentReply}
              handleAutoHeight={handleAutoHeight}
              setReviewContent={setReviewContent}
              setActionType={setActionType}
              handleSetReplyParent={handleSetReplyParent}
            />
          );
        })}
      </ReviewContainer>
    </Reviews>
  );
};

export default RecipeReview;
