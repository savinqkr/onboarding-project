import { css } from "@emotion/react";
import { IBoardBox } from "./BoardBox.interface";
import BoardItem from "../BoardItem";
import Button from "@/common/components/Button";

const VBoardBox: React.FC<IBoardBox.IVProps> = props => {
    const { boardData } = props;

    return (
        <div css={boardBoxStyle}>
            <div css={tableHeadStyle}>
                <div>No.</div>
                <div>Title</div>
                <div>Author</div>
                <div>CreatedAt</div>
                <div>UpdatedAt</div>
            </div>

            {/* {boardData.map((v, key) => (
                <BoardItem
                    key={key}
                    no={v}
                    title={v}
                    author={v}
                    createdAt={v}
                    updatedAt={v}
                />
            ))} */}

            <div css={buttonBox}>
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
const buttonBox = css`
    margin-top: 50px;
    text-align: center;
`;

export default VBoardBox;
