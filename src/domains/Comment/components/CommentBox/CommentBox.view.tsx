import { css } from "@emotion/react";
import { ICommentBox } from "./CommentBox.interface";
import CommentItem from "../CommentItem";

const VCommentBox: React.FC<ICommentBox.IVProps> = () => {
    const commentList = [1, 2, 3]; // 임시

    return (
        <>
            <div css={commentBoxStyle}>
                {commentList.map((comment, index) => (
                    <CommentItem />
                ))}
            </div>
            <button
                css={largeButtonStyle}
                onClick={() => console.log("댓글 더보기")}
            >
                더보기
            </button>
        </>
    );
};

const commentBoxStyle = css`
    width: 863px;
    margin-top: 40px;
    border-left: 1.5px solid #000;
    border-right: 1.5px solid #000;
`;

const largeButtonStyle = css`
    width: 180px;
    height: 50px;
    margin-top: 20px;
    font-size: 24px;
    color: #fff;
    background: #4c87df;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export default VCommentBox;
