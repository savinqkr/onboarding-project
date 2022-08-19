import { css } from "@emotion/react";
import { IPostDetails } from "./PostDetails.interface";
import { MdHome, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useState } from "react";

const VPostDetails: React.FC<IPostDetails.IVProps> = props => {
    const { postId, postData, onClickDeletePost } = props;
    const router = useRouter();

    const [like, setLike] = useState(false);

    return (
        <>
            <button
                css={homeBtnStyle}
                type="button"
                onClick={() => router.push("/")}
            >
                <MdHome size={24} />
                Home
            </button>
            <div css={postInfoStyle}>
                <h1>{postData?.title}</h1>
                <p>{`by ${postData?.author.nickname}`}</p>
                <p>
                    {`${dayjs(postData?.createdAt).format(
                        "YYYY-MM-DD HH:mm:ss"
                    )} / ${dayjs(postData?.updatedAt).format(
                        "YYYY-MM-DD HH:mm:ss"
                    )}`}
                </p>
            </div>
            <div css={postContentStyle}>{postData?.content}</div>
            <div css={buttonGroupStyle}>
                <div css={buttonInnerStyle}>
                    <div css={likeInfoStyle}>
                        <div css={likeBtnStyle} onClick={() => setLike(!like)}>
                            {like ? (
                                <MdFavorite size="36" color="red" />
                            ) : (
                                <MdFavoriteBorder size="36" />
                            )}
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
                {typeof window !== "undefined" &&
                    postData?.authorId === localStorage.getItem("userId") && (
                        <div css={buttonInnerStyle}>
                            <button
                                css={mediumButtonStyle}
                                onClick={() =>
                                    router.push({
                                        pathname: "/post/update/[id]",
                                        query: { id: postId },
                                    })
                                }
                            >
                                게시글 수정
                            </button>
                            <button
                                css={mediumButtonStyle}
                                onClick={onClickDeletePost}
                            >
                                게시글 삭제
                            </button>
                        </div>
                    )}
            </div>
        </>
    );
};

const homeBtnStyle = css`
    width: 150px;
    height: 50px;
    margin-top: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 24px;
    color: #808080;
    background-color: #fff;
    border: 1px solid #808080;
    position: absolute;
    left: 20px;
    cursor: pointer;
`;
const postInfoStyle = css`
    width: 863px;
    font-size: 20px;
    text-align: right;
    & > h1 {
        margin: 80px 0 40px;
        text-align: center;
    }
    & > p:first-of-type {
        font-size: 26px;
    }
    & > p:last-of-type {
        color: #808080;
        line-height: 0;
    }
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
export default VPostDetails;
