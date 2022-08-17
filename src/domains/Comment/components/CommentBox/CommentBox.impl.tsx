import { ICommentBox } from "./CommentBox.interface";
import VCommentBox from "./CommentBox.view";

const CommentBox: React.FC<ICommentBox.IProps> = props => {
    const { postId } = props;
    return <VCommentBox postId={postId} />;
};

export default CommentBox;
