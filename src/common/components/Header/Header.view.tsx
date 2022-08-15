import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import { MdOutlineRefresh } from "react-icons/md";

const VHeader: React.FC<Header.IVProps> = ({
    userLogout,
    refreshToken,
    haveNoToken,
    userNickname,
    sessionTime,
}) => {
    const router = useRouter();
    const pathList = ["/post/create/new", "/post/update/[id]"];

    if (haveNoToken) {
        return (
            <div css={headerStyle}>
                <div css={loginPositionStyle}>
                    <div
                        css={buttonStyle}
                        onClick={() => router.push("/login")}
                    >
                        로그인
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div css={headerStyle}>
            <div css={sessionGroupStyle}>
                <span>세션 : {sessionTime}</span>
                <button onClick={refreshToken}>
                    <MdOutlineRefresh />
                </button>
            </div>
            <div css={nickNameStyle}>{String(userNickname)}님 안녕하세요!</div>
            <div css={buttonGroupStyle}>
                {!pathList.includes(router.pathname) && (
                    <div
                        css={buttonStyle}
                        onClick={() => router.push("/post/create/new")}
                    >
                        게시글 추가
                    </div>
                )}
                <div css={buttonStyle} onClick={userLogout}>
                    로그아웃
                </div>
            </div>
        </div>
    );
};

const headerStyle = css`
    height: 100px;
    padding: 0 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #d9d9d9;
`;
const sessionGroupStyle = css`
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    & > button {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        cursor: pointer;
    }
`;
const nickNameStyle = css`
    font-size: 24px;
`;
const loginPositionStyle = css`
    width: 100%;
    display: flex;
    justify-content: right;
`;
const buttonGroupStyle = css`
    width: 310px;
    display: flex;
    justify-content: space-between;
`;
const buttonStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 40px;
    font-size: 22px;
    color: #fff;
    background-color: #4c87df;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;
export default VHeader;
