import dayjs from "dayjs";
import { css } from "@emotion/react";
import { IBoardItem } from "./BoardItem.interface";

const VBoardItem: React.FC<IBoardItem.IVProps> = props => {
    const { no, title, author, createdAt, updatedAt } = props;

    return (
        <tr css={boardItemStyle}>
            <td>{no}</td>
            <td>{title}</td>
            <td>{author}</td>
            <td>{dayjs(createdAt).format("YYYY-MM-DD")}</td>
            <td>{dayjs(updatedAt).format("YYYY-MM-DD")}</td>
        </tr>
    );
};

const boardItemStyle = css`
    width: 1200px;
    height: 90px;
    margin-top: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`;
export default VBoardItem;
