import { AiOutlineSend } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { ReplyTextInput, UserAvatar } from '../RecipeReview/RecipeReviewStyles';

const ReplyInput = ({
  reviewContent,
  parentReply,
  replyToUserName,
  replyTo,
  currentUserAvatar,
  setReviewContent,
  setActionType,
  handleAutoHeight,
  handleSubmit,
}) => {
  return (
    <ReplyTextInput>
      <p>
        <span>
          Reply to <Link to={`/profile/${replyTo}`}>{replyToUserName}</Link>
        </span>
        <button onClick={() => setActionType('review')}>
          <IoIosClose />
        </button>
      </p>
      <div>
        <UserAvatar>
          <Link to="/profile">
            <img src={currentUserAvatar} alt="" />
          </Link>
        </UserAvatar>
        <textarea
          placeholder="Reply now..."
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
          onInput={(e) => handleAutoHeight(e)}
        ></textarea>
        <button
          onClick={() => handleSubmit(parentReply, replyToUserName, replyTo)}
        >
          <AiOutlineSend />
        </button>
      </div>
    </ReplyTextInput>
  );
};

export default ReplyInput;
