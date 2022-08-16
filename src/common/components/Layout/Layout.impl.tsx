import VLayout from "./Layout.view";
import { ILayout } from "./Layout.interface";

const Layout: React.FC<ILayout.IProps> = props => {
    return <VLayout {...props} />;
};

export default Layout;
