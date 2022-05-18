import { AiOutlineSend } from 'react-icons/ai';
import {
  ReplyTextInput,
  StarItem,
  Stars,
  UserAvatar,
} from '../RecipeReview/RecipeReviewStyles';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewInput = ({
  reviewContent,
  currentUserAvatar,
  setReviewContent,
  handleAutoHeight,
  handleSubmit,
}) => {
  const inputRef = useRef();
  const [starNumber, setStarNumber] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <ReplyTextInput>
      <Stars>
        {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
          <StarItem
            key={star}
            active={star + 1 <= starNumber && 1}
            onClick={() => setStarNumber(star + 1)}
          >
            <FaStar />
          </StarItem>
        ))}
      </Stars>
      <div>
        <UserAvatar>
          <Link to="/profile">
            <img src={currentUserAvatar} alt="" />
          </Link>
        </UserAvatar>
        <textarea
          ref={inputRef}
          placeholder="Write a review..."
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          onInput={(e) => handleAutoHeight(e)}
        ></textarea>
        <button
          onClick={() => {
            handleSubmit(starNumber);
            setStarNumber(0);
          }}
        >
          <AiOutlineSend />
        </button>
      </div>
    </ReplyTextInput>
  );
};

export default ReviewInput;
