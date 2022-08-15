import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useParse, useCounter } from "@/domains/User/hooks";
import authService from "@User/services/auth.service";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const haveNoToken =
        typeof window !== "undefined" && !localStorage.getItem("accessToken");

    let userInfo;
    let sessionTime;
    if (typeof window !== "undefined") {
        userInfo = useParse(
            String(window.localStorage.getItem("accessToken")),
            haveNoToken
        );

        if (userInfo) {
            window.localStorage.setItem(
                "accountName",
                String(userInfo.accountName)
            );
            sessionTime = useCounter(userInfo.exp);
        }
    }

    /**
     * Refresh JWT
     * @param accountName
     * @param refreshToken
     * @returns -- accessToken, refreshToken
     */
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

    const userLogout = () => {
        const answer = confirm("로그아웃 하시겠습니까?");
        if (answer) {
            window.localStorage.clear();
            router.reload();
        }
    };

    const refreshToken = () => {
        refreshJwtRefetch();
    };

    return (
        <VHeader
            userLogout={userLogout}
            refreshToken={refreshToken}
            haveNoToken={haveNoToken}
            userNickname={userInfo ? userInfo.nickname : ""}
            sessionTime={sessionTime}
        />
    );
};

export default Header;
