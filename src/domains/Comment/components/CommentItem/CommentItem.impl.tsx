import { useRouter } from "next/router";
import { ICommentItem } from "./CommentItem.interface";
import VCommentItem from "./CommentItem.view";

const CommentItem: React.FC<ICommentItem.IProps> = () => {
    // postId
    const { query } = useRouter();
    const postId = (query.id as string) ?? "";

    return <VCommentItem postId={postId} />;
};

export default CommentItem;
