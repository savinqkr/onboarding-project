import { css } from "@emotion/react";
import { IPostBox } from "./PostBox.interface";
import { PostDetails } from "@Post/components";
import { CommentBox } from "@Comment/components";

const VPostBox: React.FC<IPostBox.IVProps> = () => {
    return (
        <div css={postBoxStyle}>
            <PostDetails />
            <CommentBox />
        </div>
    );
};

const postBoxStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default VPostBox;
