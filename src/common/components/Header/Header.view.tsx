import Link from "next/link";
import Button from "../Button";
import { css } from "@emotion/react";
import { Header } from "./Header.interface";

const VHeader: React.FC<Header.IVProps> = ({
    goToLogin,
    userLogout,
    haveNoToken,
    userNickname,
}) => {
    return (
        <div css={headerStyle}>
            {haveNoToken ? (
                <div css={buttonPositionStyle}>
                    <Link href="/login">
                        <Button name="로그인" onClick={goToLogin} />
                    </Link>
                </div>
            ) : (
                <>
                    <div css={sessionGroupStyle}>세션 :</div>
                    <p css={nickNameStyle}>{userNickname}님 안녕하세요!</p>
                    <div css={buttonGroupStyle}>
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

const headerStyle = css`
    height: 100px;
    padding: 0 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d9d9d9;
`;
const sessionGroupStyle = css`
    position: absolute;
    left: 36px;
`;
const nickNameStyle = css`
    font-size: 24px;
`;
const buttonGroupStyle = css`
    width: 310px;
    position: absolute;
    right: 36px;
    display: flex;
    justify-content: space-between;
`;
const buttonPositionStyle = css`
    width: 140px;
    position: absolute;
    right: 36px;
`;
export default VHeader;
