import Link from "next/link";
import { css } from "@emotion/react";
import { ISignUpForm } from "./SignUpForm.interface";

const VSignUpForm: React.FC<ISignUpForm.IVProps> = props => {
    const { register, onSubmit } = props;
    return (
        <div css={SignUpFormStyle()}>
            <form onSubmit={onSubmit} css={FormStyle}>
                <label>ID</label>
                <input
                    type="text"
                    placeholder="아이디"
                    {...register("register_id")}
                />
                <label>Nickname</label>
                <input
                    type="text"
                    placeholder="닉네임"
                    {...register("register_nickname")}
                />

                <label>Signature</label>
                <input
                    type="text"
                    placeholder="비밀번호"
                    {...register("register_signature")}
                />

                <div css={ButtonGroupStyle}>
                    <button type="submit" css={SubmitBtnStyle}>
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
};

const SignUpFormStyle = (backgroundColor?: string) => css`
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
        margin-bottom: 4px;
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
    margin-top: 37px;
    text-align: center;
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

export default VSignUpForm;
