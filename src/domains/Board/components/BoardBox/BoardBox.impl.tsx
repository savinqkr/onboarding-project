import { IBoardBox } from "./BoardBox.interface";
import VBoardBox from "./BoardBox.view";
import { useQuery } from "@tanstack/react-query";
import boardService from "@Board/services/board.service";
import { useEffect } from "react";

const BoardBox: React.FC<IBoardBox.IProps> = () => {
    // get board
    const { data: boardData, refetch: getBoardRefetch } = useQuery(
        ["get_board"],
        () => boardService.getBoard({ limit: 5 }),
        {
            enabled: false,
        }
    );

    getBoardRefetch();
    console.log(boardData);

    useEffect(() => {
        console.log("--- get board ---");
        console.log(boardData);
    }, [boardData]);

    return <VBoardBox boardData={boardData} />;
};

export default BoardBox;
