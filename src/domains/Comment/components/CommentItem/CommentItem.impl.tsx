import { ICommentItem } from "./Comment.interface";
import VCommentItem from "./CommentItem.view";

const CommentItem: React.FC<ICommentItem.IProps> = props => {
    const { postId } = props;

    return <VCommentItem postId={postId} />;
};

export default CommentItem;
