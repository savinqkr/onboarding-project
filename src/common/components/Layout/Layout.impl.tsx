import VLayout from "./Layout.view";
import { ILayout } from "./Layout.interface";
// import { usePageGuard } from "@common/hooks";

const Layout: React.FC<ILayout.IProps> = props => {
    // usePageGuard();

    return <VLayout {...props} />;
};

export default Layout;