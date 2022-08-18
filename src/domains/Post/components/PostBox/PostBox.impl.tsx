import { IPostBox } from "./PostBox.interface";
import VPostBox from "./PostBox.view";

const PostBox: React.FC<IPostBox.IProps> = () => {
    return <VPostBox />;
};

export default PostBox;
