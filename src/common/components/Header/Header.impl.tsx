import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";
import { parseJwt } from "@/domains/User/hooks";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const haveNoToken =
        typeof window !== "undefined" &&
        !localStorage.getItem("userTokens") &&
        localStorage.getItem("userToken") !== undefined;
    // console.log("haveNoToken : " + haveNoToken);

    let userInfo;
    if (typeof window !== "undefined") {
        userInfo = parseJwt(localStorage.getItem("userTokens"));
        console.log(userInfo);
    }
    // typeof window !== "undefined" &&
    //     console.log("nowToken : " + localStorage.getItem("userTokens"));

    const goToLogin = () => {
        router.push("/login");
    };

    const userLogout = () => {
        const answer = confirm("로그아웃 하시겠습니까?");
        if (answer) {
            window.localStorage.clear();
            // router.push("/");
            // location.reload();
            router.reload();
        }
    };

    return (
        <VHeader
            goToLogin={goToLogin}
            userLogout={userLogout}
            haveNoToken={haveNoToken}
            userNickname={userInfo ? userInfo.nickname : ""}
            // sessionTime={sessionTime}
        />
    );
};

export default Header;
