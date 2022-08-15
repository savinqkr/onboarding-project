import { css } from "@emotion/react";
import { IPostDetails } from "./PostDetails.interface";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const VPostDetails: React.FC<IPostDetails.IVProps> = props => {
    const { postId } = props;

    const commentList = ["Ann", "Savin", "Tom"];

    return (
        <div css={postDetailsStyle}>
            <h2>Title ({postId})</h2>
            <div css={postInfoStyle}>
                <p>by Author</p>
                <p>created_at / updated_at</p>
            </div>
            <div css={postContentStyle}>Contents ....</div>
            <div css={buttonGroupStyle}>
                <div css={buttonInnerStyle}>
                    <div css={likeInfoStyle}>
                        <div
                            css={likeBtnStyle}
                            onClick={() => console.log("좋아요")}
                        >
                            <MdFavoriteBorder size="36" />
                        </div>
                        <span>68</span>
                    </div>
                    <button
                        css={mediumButtonStyle}
                        onClick={() => console.log("댓글 쓰기!!!")}
                    >
                        댓글 쓰기
                    </button>
                </div>
                <div css={buttonInnerStyle}>
                    <button
                        css={mediumButtonStyle}
                        onClick={() => console.log("게시글 수정!!!!!")}
                    >
                        게시글 수정
                    </button>
                    <button
                        css={mediumButtonStyle}
                        onClick={() => console.log("게시글 삭제!!!!!")}
                    >
                        게시글 삭제
                    </button>
                </div>
            </div>
            <div css={commentGroupStyle}>
                {commentList.map((nickname, idx) => (
                    <>
                        <div css={commentInnerStyle}>
                            <div>
                                <div>{nickname}</div>
                                <div>created_at</div>
                            </div>
                            <div>댓글!!!!!!!!!</div>
                        </div>
                        <div css={commentInnerBtnStyle}>
                            <span>수정</span>
                            <span>삭제</span>
                        </div>
                    </>
                ))}
            </div>
            <button
                css={largeButtonStyle}
                onClick={() => console.log("댓글 더보기")}
            >
                더보기
            </button>
        </div>
    );
};

const postDetailsStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin: 80px 0 0;
        text-align: center;
    }
`;
const postInfoStyle = css`
    width: 863px;
    text-align: right;
`;
const postContentStyle = css`
    width: 863px;
    min-height: 280px;
    padding: 16px;
    box-sizing: border-box;
    border: 1px solid #000000;
`;
const buttonGroupStyle = css`
    width: 863px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
`;
const buttonInnerStyle = css`
    width: 300px;
    display: flex;
    justify-content: space-between;
`;
const likeInfoStyle = css`
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const likeBtnStyle = css`
    margin-right: 10px;
    cursor: pointer;
`;
const mediumButtonStyle = css`
    width: 140px;
    height: 40px;
    font-size: 18px;
    color: #fff;
    background: #4c87df;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;
const largeButtonStyle = css`
    width: 180px;
    height: 50px;
    font-size: 24px;
    color: #fff;
    background: #4c87df;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;
const commentGroupStyle = css`
    width: 865px;
    margin: 40px 0 20px;
    padding-top: 10px;
    border-left: 1px solid #000;
    border-right: 1px solid #000;
`;
const commentInnerStyle = css`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    // border: 1px solid orange;
`;
const commentInnerBtnStyle = css`
    margin-bottom: 10px;
    text-align: right;
    font-size: 20px;
    color: #808080;
    & > span {
        padding: 0 10px;
        cursor: pointer;
    }
    & > span:first-child {
        border-right: 1px solid #808080;
    }
`;
export default VPostDetails;
