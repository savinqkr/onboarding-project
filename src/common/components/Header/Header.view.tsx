import Link from "next/link";
import { css } from "@emotion/react";
import { Header } from "./Header.interface";
import Button from "../Button";
import { parseJwt } from "@/domains/User/hooks";

const VHeader: React.FC<Header.IVProps> = ({
    goToLogin,
    userLogout,
    haveNoToken,
}) => {
    // console.log("--- AccessToken ---");
    // const accessToken = window.localStorage.getItem("userTokens");
    // console.log(accessToken);
    // console.log(parseJwt(accessToken));
    // // if (!haveNoToken) {
    // //     const tokens = window.localStorage.getItem("userTokens");
    // const user = parseJwt(accessToken);
    // // }

    return (
        <div css={HeaderStyle}>
            {haveNoToken ? (
                <div css={ButtonPositionStyle}>
                    <Link href="/login">
                        <Button name="로그인" onClick={goToLogin} />
                    </Link>
                </div>
            ) : (
                <>
                    <p css={NickNameStyle}>
                        {
                            // parseJwt(window.localStorage.getItem("userTokens"))
                            //     .nickname
                            "Nickname"
                        }
                        님 안녕하세요!
                    </p>
                    <div css={ButtonGroupStyle}>
                        <Link href="">
                            <Button
                                name="게시글 추가"
                                onClick={() => alert("ADD NEW POST!")}
                            />
                        </Link>
                        <Button name="로그아웃" onClick={userLogout} />
                    </div>
                </>
            )}
        </div>
    );
};

const HeaderStyle = css`
    height: 100px;
    padding: 0 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
`;
const NickNameStyle = css`
    font-size: 24px;
`;
const ButtonGroupStyle = css`
    width: 310px;
    position: absolute;
    right: 36px;
    display: flex;
    justify-content: space-between;
`;
const ButtonPositionStyle = css`
    width: 140px;
    position: absolute;
    right: 36px;
`;
export default VHeader;
