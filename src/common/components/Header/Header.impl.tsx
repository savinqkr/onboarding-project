import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";
import { useParse } from "@/domains/User/hooks";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    // const haveNoToken =
    //     typeof localStorage.getItem("userToken") !== "undefined";
    const haveNoToken =
        typeof window !== "undefined" &&
        !localStorage.getItem("userTokens") &&
        localStorage.getItem("userToken") !== undefined;

    let userInfo;
    if (typeof window !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        userInfo = useParse(String(window.localStorage.getItem("userTokens")));
        console.log(userInfo);
    }

    const goToLogin = () => {
        router.push("/login");
    };

    const userLogout = () => {
        const answer = confirm("로그아웃 하시겠습니까?");
        if (answer) {
            window.localStorage.clear();
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
