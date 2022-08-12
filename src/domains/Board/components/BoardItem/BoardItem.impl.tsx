import { IBoardItem } from "./BoardItem.interface";
import VBoardItem from "./BoardItem.view";

const BoardItem: React.FC<IBoardItem.IProps> = props => {
    return <VBoardItem {...props} />;
};

export default BoardItem;
