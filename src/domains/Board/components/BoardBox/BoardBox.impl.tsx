import { IBoardBox } from "./BoardBox.interface";
import VBoardBox from "./BoardBox.view";

const BoardBox: React.FC<IBoardBox.IProps> = () => {
    return <VBoardBox />;
};

export default BoardBox;
