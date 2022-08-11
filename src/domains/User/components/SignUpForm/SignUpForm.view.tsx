import { css } from "@emotion/react";
import { ISignUpForm } from "./SignUpForm.interface";

const VSignUpForm: React.FC<ISignUpForm.IVProps> = props => {
    const { register, onSubmit, getSignature } = props;
    return (
        <div css={signUpFormStyle}>
            <form onSubmit={onSubmit} css={formStyle}>
                <label>AccountName</label>
                <input
                    type="text"
                    placeholder="ID"
                    {...register("register_accountName")}
                />
                <label>Nickname</label>
                <input
                    type="text"
                    placeholder="Password"
                    {...register("register_nickname")}
                />
                <label>Signature</label>
                <div css={signatureGroupStyle}>
                    <input
                        // type="text"
                        type="password"
                        readOnly
                        placeholder="Signature"
                        {...register("register_signature")}
                        css={signatureInputStyle}
                    />
                    <div onClick={getSignature} css={getSignatureBtnStyle}>
                        받기
                    </div>
                </div>
                <div css={buttonGroupStyle}>
                    <button type="submit" css={submitBtnStyle}>
                        회원가입
                    </button>
                </div>
            </form>
        </div>
    );
};

const signUpFormStyle = css`
    width: 650px;
    min-height: 490px;
    margin: 140px auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: "#D9D9D9";
`;
const formStyle = css`
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
const buttonGroupStyle = css`
    width: 400px;
    margin-top: 37px;
    text-align: center;
    /* display: flex;
    justify-content: space-between; */
`;
const submitBtnStyle = css`
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
const signatureGroupStyle = css`
    display: flex;
    justify-content: space-between;
`;
const signatureInputStyle = css`
    width: 330px;
    height: 60px;
    padding: 10px 20px;
    font-size: 20px;
    box-sizing: border-box;
    &:focus {
        outline: 1px solid #4c87df;
    }
`;
const getSignatureBtnStyle = css`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: red;
    background: rgba(255, 255, 255, 1);
    border: 1px solid red;
    cursor: pointer;
`;
export default VSignUpForm;
