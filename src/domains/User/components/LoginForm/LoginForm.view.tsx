import { css } from "@emotion/react";
import { ILoginForm } from "./LoginForm.interface";
import { useRouter } from "next/router";

const VLoginForm: React.FC<ILoginForm.IVProps> = props => {
    const { register, onClickLoginUser } = props;
    const router = useRouter();
    return (
        <div css={loginFormStyle}>
            <form onSubmit={onClickLoginUser} css={formStyle}>
                <label>AccountName</label>
                <input
                    type="text"
                    placeholder="아이디"
                    {...register("loginAccountName")}
                />
                <label>PrivateKey</label>
                <input
                    type="password"
                    placeholder="패스워드"
                    {...register("loginPrivateKey")}
                />

                <div css={buttonGroupStyle}>
                    <button type="submit" css={buttonStyle}>
                        로그인
                    </button>
                    <button
                        type="button"
                        css={buttonStyle}
                        onClick={() => router.push("/signup")}
                    >
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
};

const loginFormStyle = css`
    width: 650px;
    min-height: 490px;
    margin: 140px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
`;
const formStyle = css`
    display: flex;
    flex-direction: column;
    & > label {
        margin: 10px 0 4px;
        font-size: 22px;
        font-weight: 700;
    }
    & > input {
        width: 400px;
        height: 60px;
        padding: 10px 20px;
        font-size: 20px;
        box-sizing: border-box;
        &:focus {
            outline: 1px solid #4c87df;
        }
    }
`;
const buttonGroupStyle = css`
    width: 400px;
    height: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;
const buttonStyle = css`
    width: 180px;
    height: 50px;
    font-size: 24px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: #4c87df;
    border: none;
    cursor: pointer;
`;

export default VLoginForm;
