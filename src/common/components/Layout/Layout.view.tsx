import Header from "@common/components/Header";
import { ILayout } from "./Layout.interface";
import { useRouter } from "next/router";

const VLayout: React.FC<ILayout.IVProps> = ({ children }) => {
    const router = useRouter();
    const pathList = ["/login", "/signup"];

    return (
        <>
            <header>{!pathList.includes(router.pathname) && <Header />}</header>
            <main>{children}</main>
        </>
    );
};

export default VLayout;
