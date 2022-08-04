import Link from "next/link";
import { css } from "@emotion/react";
import { HeaderBarVProps } from "./Header.inerface";

const VHeaderBar: React.FC<HeaderBarVProps> = () => {
    return (
        <div css={headerBar}>
            {/* 로그인 토큰 없으면 */}
            <Link href="/Login">
                <div>로그인</div>
            </Link>
            {/* 로그인 토큰 있으면 */}
            {/* <Link href="">
                <div>게시글 추가</div>
            </Link>
            <Link href="">
                <div>로그아웃</div>
            </Link> */}
        </div>
    );
};

const headerBar = css`
    height: 50px;
    background-color: gray;
`;

export default VHeaderBar;
