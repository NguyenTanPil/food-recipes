import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../firebase';
import { getDayMonthYearNumber } from '../../Utils/getDayMonthYear';
import RecipeReply from '../RecipeReply';
import {
  ContentReview,
  DetailReview,
  ReviewItem,
  UserAvatar,
} from '../RecipeReview/RecipeReviewStyles';
import ReplyInput from '../ReplyInput';

const Review = ({
  review,
  actionType,
  parentReply,
  currentUser,
  reviewContent,
  setReviewContent,
  setActionType,
  handleAutoHeight,
  handleSetReplyParent,
}) => {
  const [replyList, setReplyList] = useState([]);
  const [replyPostion, setReplyPosition] = useState('');

  const handleReply = async (parentId, replyToUserName, userId) => {
    const data = {
      review: reviewContent,
      userAvatar: currentUser.avatar,
      userId: currentUser.id,
      userName: currentUser.name,
      createdAt: new Date().getTime(),
      parentId: parentId,
      replyTo: userId,
      replyToUserName: replyToUserName,
    };

    if (reviewContent) {
      const docRef = await addDoc(collection(db, 'replies'), data);
      setReplyList([...replyList, { ...data, id: docRef.id }]);
      setReviewContent('');
      setActionType('review');
    } else {
      console.log('Review is empty');
    }
  };

  const handleSetReplyPosition = (position, parentId) => {
    if (currentUser.id) {
      setActionType('reply');

      if (parentId) {
        handleSetReplyParent(parentId);
        setReplyPosition(position);
      } else {
        handleSetReplyParent(position);
        setReplyPosition('');
      }
    }
  };

  useEffect(() => {
    let isSubscribed = true;

    const fetchReplies = async () => {
      let response = [];

      try {
        const queryReply = query(
          collection(db, 'replies'),
          where('parentId', '==', review.id),
        );
        const replySnap = await getDocs(queryReply);

        replySnap.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });

        response.sort((a, b) => a.createdAt - b.createdAt);
      } catch (error) {
        console.log('Error', error.message);
      }

      if (isSubscribed) {
        setReplyList(response);
      }
    };

    fetchReplies();

    return () => {
      isSubscribed = false;
    };
  }, [review.id]);

  return (
    <ReviewItem>
      <UserAvatar>
        <Link to={`/profile/${review.userId}`}>
          <img src={review.userAvatar} alt="" />
        </Link>
      </UserAvatar>
      <ContentReview>
        <div>
          <Link to={`/profile/${review.userId}`}>
            <h4>{review.userName}</h4>
          </Link>
          <p>{review.review}</p>
        </div>
      </ContentReview>
      <DetailReview>
        <span
          onClick={() => handleSetReplyPosition(review.id, review.parentId)}
        >
          Reply
        </span>
        <span>{getDayMonthYearNumber(review.createdAt)}</span>
      </DetailReview>
      {actionType === 'reply' && parentReply === review.id && !replyPostion && (
        <ReplyInput
          reviewContent={reviewContent}
          currentUserAvatar={currentUser.avatar}
          parentReply={parentReply}
          replyToUserName={review.userName}
          replyTo={review.userId}
          setActionType={setActionType}
          setReviewContent={setReviewContent}
          handleAutoHeight={handleAutoHeight}
          handleSubmit={handleReply}
        />
      )}
      <RecipeReply
        replyList={replyList}
        actionType={actionType}
        parentReply={parentReply}
        replyPostion={replyPostion}
        reviewContent={reviewContent}
        currentUserAvatar={currentUser.avatar}
        setReviewContent={setReviewContent}
        setActionType={setActionType}
        handleAutoHeight={handleAutoHeight}
        handleReply={handleReply}
        handleSetReplyPosition={handleSetReplyPosition}
      />
    </ReviewItem>
  );
};

export default Review;
