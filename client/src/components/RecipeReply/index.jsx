import { Link } from 'react-router-dom';
import { getDayMonthYearNumber } from '../../Utils/getDayMonthYear';
import {
  ContentReview,
  DetailReview,
  ReplyContainer,
  ReviewItem,
  UserAvatar,
} from '../RecipeReview/RecipeReviewStyles';
import ReplyInput from '../ReplyInput';

const RecipeReply = ({
  actionType,
  parentReply,
  replyList,
  replyPostion,
  reviewContent,
  currentUserAvatar,
  setActionType,
  setReviewContent,
  handleSetReplyPosition,
  handleAutoHeight,
  handleReply,
}) => {
  return (
    <ReplyContainer>
      {replyList.map((reply) => (
        <ReviewItem key={reply.id}>
          <UserAvatar>
            <Link to={`/profile/${reply.userId}`}>
              <img src={reply.userAvatar} alt="" />
            </Link>
          </UserAvatar>
          <ContentReview>
            <div>
              <Link to={`/profile/${reply.userId}`}>
                <h4>{reply.userName}</h4>
              </Link>
              <p>
                <Link to={`/profile/${reply.replyTo}`}>
                  {reply.replyToUserName}
                </Link>
                {reply.review}
              </p>
            </div>
          </ContentReview>
          <DetailReview>
            <span
              onClick={() => handleSetReplyPosition(reply.id, reply.parentId)}
            >
              Reply
            </span>
            <span>{getDayMonthYearNumber(reply.createdAt)}</span>
          </DetailReview>
          {actionType === 'reply' && replyPostion === reply.id && (
            <ReplyInput
              reviewContent={reviewContent}
              currentUserAvatar={currentUserAvatar}
              parentReply={parentReply}
              replyTo={reply.userId}
              replyToUserName={reply.userName}
              setActionType={setActionType}
              setReviewContent={setReviewContent}
              handleAutoHeight={handleAutoHeight}
              handleSubmit={handleReply}
            />
          )}
        </ReviewItem>
      ))}
    </ReplyContainer>
  );
};

export default RecipeReply;
