import Link from "next/link";
import { css } from "@emotion/react";
import { Header } from "./Header.interface";
import Button from "../Button";

const VHeader: React.FC<Header.IVProps> = ({ goToLogin }) => {
    return (
        <div css={HeaderStyle}>
            {/* 로그인 토큰 없으면 */}
            {/* <Button name="로그인" onClick={goToLogin} /> */}
            <Link href="/login">
                <Button name="로그인" onClick={goToLogin} />
            </Link>

            {/* 로그인 토큰 있으면 */}
            {/* <Link href="">
                <Button name="게시글 추가" onClick={goToLogin} />
            </Link>
            <Link href="">
                <Button name="로그아웃" onClick={goToLogin} />
            </Link> */}
        </div>
    );
};

const HeaderStyle = css`
    height: 100px;
    padding: 0 36px;
    display: flex;
    justify-content: right;
    align-items: center;
    background-color: #d9d9d9;
`;

export default VHeader;
