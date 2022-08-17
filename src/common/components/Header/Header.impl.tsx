import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useParseJwt, useCounter } from "@/domains/User/hooks";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";
import authService from "@User/services/auth.service";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const haveNoToken: boolean =
        typeof window !== "undefined" && !localStorage.getItem("accessToken");

    let userInfo:
        | {
              accountName: string;
              exp: number;
              iat: number;
              nickname: string;
              sub: string;
          }
        | undefined;
    let sessionTime: string | void;
    if (typeof window !== "undefined") {
        userInfo = useParseJwt(
            String(window.localStorage.getItem("accessToken")),
            haveNoToken
        );
        if (userInfo) {
            // console.log(userInfo);
            window.localStorage.setItem("accountName", userInfo.accountName);
            window.localStorage.setItem("userId", userInfo.sub);
            sessionTime = useCounter(userInfo.exp);
        }
    }

    // refreshJwt -- useQuery
    const { data: refreshJwtData, refetch: refreshJwtRefetch } = useQuery(
        ["refreshJwt"],
        () =>
            authService.refreshJwt({
                accountName: String(window.localStorage.getItem("accountName")),
                refreshToken: String(
                    window.localStorage.getItem("refreshToken")
                ),
            }),
        {
            enabled: false,
        }
    );

    // onClickUserLogout
    const onClickUserLogout = () => {
        const answer = confirm("로그아웃 하시겠습니까?");
        if (answer) {
            window.localStorage.clear();
            router.reload();
        }
    };

    // onClickRefreshToken
    const onClickRefreshToken = () => refreshJwtRefetch();

    useEffect(() => {
        if (!refreshJwtData) return;
        window.localStorage.setItem(
            "accessToken",
            String(refreshJwtData.accessToken)
        );
        window.localStorage.setItem(
            "refreshToken",
            String(refreshJwtData.refreshToken)
        );
        router.reload();
    }, [refreshJwtData]);

    return (
        <VHeader
            onClickUserLogout={onClickUserLogout}
            onClickRefreshToken={onClickRefreshToken}
            haveNoToken={haveNoToken}
            userNickname={userInfo ? userInfo.nickname : ""}
            sessionTime={sessionTime ? sessionTime : ""}
        />
    );
};

export default Header;
