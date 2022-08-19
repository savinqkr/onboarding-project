import { useQuery } from "react-query";
import { IBoardBox } from "./BoardBox.interface";
import VBoardBox from "./BoardBox.view";
import boardService from "@Board/services/board.service";

const BoardBox: React.FC<IBoardBox.IProps> = () => {
    // getBoard -- useQuery
    const { data: boardDatas, isLoading } = useQuery(
        ["getBoard"],
        () => boardService.getBoard({ limit: 5 }),
        {
            keepPreviousData: true,
        }
    );

    // infinite scroll

    if (isLoading) return <p>Loading . . .</p>;

    return <VBoardBox boardDatas={boardDatas} />;
};

export default BoardBox;
