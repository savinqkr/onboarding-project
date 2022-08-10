import Link from "next/link";
import { css } from "@emotion/react";
import { Button } from "@common/components";
import { ILoginForm } from "./LoginForm.interface";
import { useRouter } from "next/router";

const VLoginForm: React.FC<ILoginForm.IVProps> = props => {
    const { register, onSubmit } = props;
    const router = useRouter();
    return (
        <div css={LoginFormStyle()}>
            <form onSubmit={onSubmit} css={FormStyle}>
                <label>AccountName</label>
                <input
                    type="text"
                    placeholder="아이디"
                    {...register("login_accountName")}
                />

                <label>PrivateKey</label>
                <input
                    // type="password"
                    type="text"
                    placeholder="패스워드"
                    {...register("login_privateKey")}
                />

                <div css={ButtonGroupStyle}>
                    <button type="submit" css={SubmitBtnStyle}>
                        로그인
                    </button>
                    <div
                        css={signUpBtnStyle}
                        onClick={() => router.push("/signup")}
                    >
                        회원가입
                    </div>
                </div>
            </form>
        </div>
    );
};

const LoginFormStyle = (backgroundColor?: string) => css`
    width: 650px;
    min-height: 490px;
    margin: 140px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor ? backgroundColor : "#D9D9D9"};
`;
const FormStyle = css`
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
const ButtonGroupStyle = css`
    width: 400px;
    height: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
`;
const SubmitBtnStyle = css`
    padding: 10px;
    width: 180px;
    height: 50px;
    font-size: 24px;
    border-radius: 5px;
    text-align: center;
    color: #fff;
    background-color: #4c87df;
    border: none;
    cursor: pointer;
`;
const signUpBtnStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 50px;
    font-size: 24px;
    color: #fff;
    background-color: #4c87df;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export default VLoginForm;
