// import { Header } from "next/dist/lib/load-custom-routes";
import { useRouter } from "next/router";
import { Header } from "./Header.interface";
import VHeader from "./Header.view";

const Header: React.FC<Header.IProps> = () => {
    const router = useRouter();

    const goToLogin = () => {
        router.push("/login");
    };
    return <VHeader goToLogin={goToLogin} />;
};

export default Header;
