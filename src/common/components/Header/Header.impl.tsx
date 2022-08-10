import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";
import authService from "@domains/User/services/auth.service";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const haveNoToken =
        typeof window !== "undefined" &&
        !localStorage.getItem("userTokens") &&
        localStorage.getItem("userToken") !== undefined;
    // console.log("haveNoToken : " + haveNoToken);
    // typeof window !== "undefined" &&
    //     console.log("nowToken : " + localStorage.getItem("userTokens"));

    const goToLogin = () => {
        router.push("/login");
    };

    const userLogout = () => {
        alert("로그아웃 하시겠습니까?");
        window.localStorage.clear();
        // router.push("/");
        // location.reload();
        router.reload();
    };

    return (
        <VHeader
            goToLogin={goToLogin}
            userLogout={userLogout}
            haveNoToken={haveNoToken}
        />
    );
};

export default Header;
