import { IBoardItem } from "./BoardItem.interface";
import { useRouter } from "next/router";
import VBoardItem from "./BoardItem.view";

const BoardItem: React.FC<IBoardItem.IProps> = props => {
    const { id } = props;
    const router = useRouter();

    const onClickViewDetails = () => {
        router.push({
            pathname: "/post/details/[id]",
            query: { id },
        });
    };

    return <VBoardItem {...props} onClickViewDetails={onClickViewDetails} />;
};

export default BoardItem;
