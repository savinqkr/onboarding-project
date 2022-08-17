import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import { MdOutlineRefresh } from "react-icons/md";

const VHeader: React.FC<Header.IVProps> = ({
    onClickUserLogout,
    onClickRefreshToken,
    haveNoToken,
    userNickname,
    sessionTime,
}) => {
    const router = useRouter();
    const pathList = ["/post/create/new", "/post/update/[id]"];

    return (
        <div css={headerStyle}>
            {!haveNoToken && (
                <>
                    <div css={sessionGroupStyle}>
                        <span>세션 : {sessionTime}</span>
                        <button onClick={onClickRefreshToken}>
                            <MdOutlineRefresh />
                        </button>
                    </div>
                    <div css={{ fontSize: "24px" }}>
                        {userNickname} 님 안녕하세요!
                    </div>
                </>
            )}
            <div css={buttonGroupStyle}>
                {!haveNoToken && !pathList.includes(router.pathname) && (
                    <button
                        type="button"
                        css={buttonStyle}
                        onClick={() => router.push("/post/create/new")}
                    >
                        게시글 추가
                    </button>
                )}
                <button
                    type="button"
                    css={buttonStyle}
                    onClick={
                        haveNoToken
                            ? () => router.push("/login")
                            : onClickUserLogout
                    }
                >
                    {haveNoToken ? "로그인" : "로그아웃"}
                </button>
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
