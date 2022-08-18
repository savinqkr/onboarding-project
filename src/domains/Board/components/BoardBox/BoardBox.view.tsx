import { css } from "@emotion/react";
import { IBoardBox } from "./BoardBox.interface";
import BoardItem from "../BoardItem";

const VBoardBox: React.FC<IBoardBox.IVProps> = props => {
    const { boardDatas } = props;

    return (
        <>
            <table css={boardBoxStyle}>
                <thead>
                    <tr css={tableHeadStyle}>
                        <th>No.</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>CreatedAt</th>
                        <th>UpdatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {boardDatas &&
                        boardDatas.map((post, index) => (
                            <BoardItem
                                key={post.id}
                                no={index + 1}
                                id={post.id}
                                title={post.title}
                                author={post.author.nickname}
                                createdAt={post.createdAt}
                                updatedAt={post.updatedAt}
                            />
                        ))}
                </tbody>
            </table>
            <div css={buttonContainer}>
                <button
                    css={largeButtonStyle}
                    onClick={() => {
                        console.log("SHOW MORE POSTS!!!");
                    }}
                >
                    더보기
                </button>
            </div>
        </>
    );
};

const boardBoxStyle = css`
    width: 1200px;
    margin: 100px auto 0;
`;
const tableHeadStyle = css`
    width: 1200px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 22px;
    background-color: #d9d9d9;
`;
const buttonContainer = css`
    margin-top: 50px;
    text-align: center;
`;
const largeButtonStyle = css`
    width: 180px;
    height: 50px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    background-color: #4c87df;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

export default VBoardBox;
