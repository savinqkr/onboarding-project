import Link from "next/link";
import { css } from "@emotion/react";
import { Header } from "./Header.interface";
import Button from "../Button";
import router from "next/router";

const VHeader: React.FC<Header.IVProps> = ({ goToLogin, haveToken }) => {
    return (
        <div css={HeaderStyle}>
            {/* 토큰 없으면 */}
            {haveToken && (
                <div css={ButtonPositionStyle}>
                    <Link href="/login">
                        <Button name="로그인" onClick={goToLogin} />
                    </Link>
                </div>
            )}

            {/* 토큰 있으면 */}
            {!haveToken && (
                <>
                    <p css={NickNameStyle}>NickName님 안녕하세요!</p>
                    <div css={ButtonGroupStyle}>
                        <Link href="">
                            <Button name="게시글 추가" onClick={goToLogin} />
                        </Link>
                        <Button
                            name="로그아웃"
                            onClick={() => {
                                alert("로그아웃 하시겠습니까?");
                                window.localStorage.clear();
                                router.push("/");
                            }}
                        />
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
