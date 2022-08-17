import { css } from "@emotion/react";
import { ICommentItem } from "./Comment.interface";

const VCommentItem: React.FC<ICommentItem.IVProps> = props => {
    const { postId } = props;
    return (
        <>
            <div css={commentItemStyle}>
                <div css={commentInfoStyle}>
                    <div>Nickname</div>
                    <div>created_at</div>
                </div>
                <div css={commentStyle}>댓글!!!!!!!!! +++ {postId}</div>
            </div>
            <div css={commentItemBtnStyle}>
                <button type="button" onClick={() => console.log("댓글 수정")}>
                    수정
                </button>
                <button type="button" onClick={() => console.log("댓글 삭제")}>
                    삭제
                </button>
            </div>
        </>
    );
};

const commentItemStyle = css`
    padding: 16px;
    display: flex;
    justify-content: space-between;
`;
const commentInfoStyle = css`
    width: 20%;
    border-right: 1px solid #808080;
    & > div:first-of-type {
        font-size: 22px;
        font-weight: 600;
    }
    & > div:last-of-type {
        color: #808080;
        font-size: 20px;
    }
`;
const commentStyle = css`
    width: 80%;
    font-size: 22px;
    text-align: right;
`;
const commentItemBtnStyle = css`
    padding: 0 16px;
    margin-bottom: 20px;
    text-align: right;
    font-size: 20px;
    color: #808080;
    & > button {
        padding: 0 10px;
        background: none;
        border: none;
        color: #808080;
        font-size: 20px;
        cursor: pointer;
    }
    & > button:first-of-type {
        border-right: 1px solid #808080;
    }
`;
export default VCommentItem;
