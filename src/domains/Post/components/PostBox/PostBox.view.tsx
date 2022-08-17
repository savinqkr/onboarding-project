import { css } from "@emotion/react";
import { IPostBox } from "./PostBox.interface";
import { PostDetails } from "@Post/components";
import { CommentBox } from "@Comment/components";

const VPostBox: React.FC<IPostBox.IVProps> = props => {
    const { postId } = props;
    return (
        <div css={postBoxStyle}>
            <PostDetails postId={postId} />
            <CommentBox postId={postId} />
        </div>
    );
};

const postBoxStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default VPostBox;
