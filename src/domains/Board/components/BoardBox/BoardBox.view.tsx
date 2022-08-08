import { css } from "@emotion/react";
import { IBoardBox } from "./BoardBox.interface";
import BoardItem from "../BoardItem";
import Button from "@/common/components/Button";
import { useQueries, useQuery } from "react-query";
import boardService from "../../services/board.service";
import { useEffect } from "react";

const VBoardBox: React.FC<IBoardBox.IVProps> = () => {
    const posts = [1, 2, 3, 4, 5];

    const { data, refetch } = useQuery(
        ["get_board"],
        () => boardService.getBoard({ limit: 5 }),
        {
            enabled: false,
        }
    );
    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div css={BoardBoxStyle}>
            <div css={TableHeadStyle}>
                <div>No.</div>
                <div>Title</div>
                <div>Author</div>
                <div>CreatedAt</div>
                <div>UpdatedAt</div>
            </div>

            {posts.map((v, key) => (
                <BoardItem
                    key={key}
                    no={v}
                    title={v}
                    author={v}
                    createdAt={v}
                    updatedAt={v}
                />
            ))}

            <div css={ButtonBox}>
                <Button
                    name="더보기"
                    width={180}
                    height={50}
                    fontSize={24}
                    onClick={() => {
                        console.log("Show More Posts!!!!!!!");
                    }}
                />
            </div>
        </div>
    );
};

const BoardBoxStyle = css`
    width: 1200px;
    margin: 100px auto 0;
`;

const TableHeadStyle = css`
    width: 1200px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 22px;
    background-color: #d9d9d9;
`;
const ButtonBox = css`
    margin-top: 50px;
    text-align: center;
`;

export default VBoardBox;
