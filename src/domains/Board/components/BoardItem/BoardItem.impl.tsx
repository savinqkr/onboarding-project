import { IBoardItem } from "./BoardItem.interface";
import VBoardItem from "./BoardItem.view";

const BoardItem: React.FC<IBoardItem.IProps> = () => {
    return <VBoardItem />;
};

export default BoardItem;
