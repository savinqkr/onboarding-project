import Link from "next/link";
import { css } from "@emotion/react";
import { Button, Input } from "@common/components";
import { ISignUpForm } from "./SignUpForm.interface";

const VSignUpForm: React.FC<ISignUpForm.IVProps> = () => {
    return (
        <div css={SignUpFormStyle()}>
            <form>
                <div>
                    <label>ID</label>
                    <Input
                        type="text"
                        width={400}
                        height={60}
                        placeholder={"아이디"}
                    />
                </div>
                <div>
                    <label>Nickname</label>
                    <Input
                        type="text"
                        width={400}
                        height={60}
                        placeholder={"닉네임"}
                    />
                </div>
                <div>
                    <label>Signature</label>
                    <Input
                        type="password"
                        width={400}
                        height={60}
                        placeholder={"비밀번호"}
                    />
                </div>
                <Button name="회원가입" type="submit" />
            </form>
        </div>
    );
};

const SignUpFormStyle = (backgroundColor?: string) => css`
    width: 650px;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor ? backgroundColor : "#D9D9D9"};
`;

export default VSignUpForm;
