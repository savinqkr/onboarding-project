import { useInfiniteQuery, useQuery } from "react-query";
import { IBoardBox } from "./BoardBox.interface";
import VBoardBox from "./BoardBox.view";
import boardService from "@Board/services/board.service";
import { useState } from "react";
import { useEffect } from "react";

const BoardBox: React.FC<IBoardBox.IProps> = () => {
    // getBoard -- useQuery
    // const { data: boardDatas } = useQuery(
    //     ["getBoard"],
    //     () => boardService.getBoard({ limit: 5, offset: 0 }),
    //     {
    //         keepPreviousData: true,
    //     }
    // );
    // =========================================================

    // getAllBoard -- useQuery
    const { data: allBoardData } = useQuery(
        ["getAllBoard"],
        () => boardService.getAllBoard(),
        {
            keepPreviousData: true,
        }
    );

    // =========================================================

    // getBoard -- useInfiniteQuery
    const {
        data: moreBoardDatas,
        isLoading,
        fetchNextPage,
        hasNextPage,
    } = useInfiniteQuery(
        ["getMoreBoard"],
        ({ pageParam = 0 }) =>
            boardService.getBoard({
                limit: 5,
                offset: pageParam,
            }),
        {
            keepPreviousData: true,
            getNextPageParam: (lastData, allData) => {
                if (
                    allBoardData &&
                    allData.flat().length >= allBoardData?.length
                )
                    return false;
                return allData.flat().length;
            },
        }
    );

    // onClickViewMore
    const onClickViewMore = () => {
        fetchNextPage();
    };

    if (isLoading) return <p>Loading . . .</p>;

    return (
        <VBoardBox
            boardDatas={moreBoardDatas?.pages.flat()}
            onClickViewMore={onClickViewMore}
            showMoreBtn={hasNextPage}
        />
    );
};

export default BoardBox;
