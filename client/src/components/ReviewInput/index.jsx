import { AiOutlineSend } from 'react-icons/ai';
import { ReplyTextInput, UserAvatar } from '../RecipeReview/RecipeReviewStyles';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const ReviewInput = ({
  reviewContent,
  currentUserAvatar,
  setReviewContent,
  handleAutoHeight,
  handleSubmit,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <ReplyTextInput>
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
        <button onClick={handleSubmit}>
          <AiOutlineSend />
        </button>
      </div>
    </ReplyTextInput>
  );
};

export default ReviewInput;
