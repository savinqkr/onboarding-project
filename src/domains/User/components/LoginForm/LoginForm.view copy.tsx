import Link from "next/link";
import { css } from "@emotion/react";
import { Button, Input } from "@common/components";
import { ILoginForm } from "./LoginForm.interface";

const VLoginForm: React.FC<ILoginForm.IVProps> = props => {
    const { onSubmit } = props;
    return (
        <div css={LoginFormStyle()}>
            <form onSubmit={onSubmit}>
                <div>
                    <label>ID</label>
                    <Input
                        type="text"
                        width={400}
                        height={60}
                        placeholder={"아이디"}
                    />
                    {/* <input type="text" {...register("id")} /> */}
                </div>
                <div>
                    <label>PW</label>
                    <Input
                        type="password"
                        width={400}
                        height={60}
                        placeholder={"비밀번호"}
                    />
                    {/* <input type="text" {...register("password")} /> */}
                </div>
                {/* <button type="submit">로그인</button> */}
                <Button name="로그인" type="submit" />
                <Link href="/signup">
                    <Button name="회원가입" />
                </Link>
            </form>
        </div>
    );
};

const LoginFormStyle = (backgroundColor?: string) => css`
    width: 650px;
    min-height: 490px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${backgroundColor ? backgroundColor : "#D9D9D9"};
`;

export default VLoginForm;
