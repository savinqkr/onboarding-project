import { IPostBox } from "./PostBox.interface";
import VPostBox from "./PostBox.view";

const PostBox: React.FC<IPostBox.IProps> = props => {
    return <VPostBox {...props} />;
};

export default PostBox;
