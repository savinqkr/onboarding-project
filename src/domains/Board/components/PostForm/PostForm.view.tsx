import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { IPostForm } from "./PostForm.interface";

const VPostDetails: React.FC<IPostForm.IVProps> = props => {
    const router = useRouter();

    const { postId, register, onSubmit } = props;

    return (
        <div css={postDetailsStyle}>
            <form onSubmit={onSubmit} css={formStyle}>
                <h2>
                    {router.pathname === "/post/create/new" ? (
                        <span>NEW POST</span>
                    ) : (
                        <span>EDIT POST ({postId})</span>
                    )}
                </h2>
                <label>Title</label>
                <input
                    type="text"
                    placeholder="제목"
                    autoComplete="off"
                    {...register("postTitle")}
                />
                <label>Content</label>
                <textarea placeholder="내용" {...register("postContent")} />
                <div css={buttonContainer}>
                    <button type="submit" css={largeButtonStyle}>
                        {router.pathname === "/post/create/new" ? (
                            <span>게시글 작성</span>
                        ) : (
                            <span>게시글 수정</span>
                        )}
                    </button>
                </div>
            </form>
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
const formStyle = css`
    display: flex;
    flex-direction: column;
    & > label {
        margin: 20px 0 10px;
        font-weight: 700;
        font-size: 22px;
    }
    & > input {
        width: 800px;
        height: 60px;
        padding: 10px 20px;
        font-size: 20px;
        box-sizing: border-box;
        &:focus {
            outline: none;
        }
    }
    & > textarea {
        width: 800px;
        height: 300px;
        padding: 10px 20px;
        box-sizing: border-box;
        font-size: 20px;
        resize: none;
        &:focus {
            outline: none;
        }
    }
`;
const buttonContainer = css`
    width: 800px;
    margin-top: 40px;
    text-align: right;
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
export default VPostDetails;
