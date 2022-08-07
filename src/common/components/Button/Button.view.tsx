import { css } from "@emotion/react";
import { IButton } from "./Button.interface";

const VButton: React.FC<IButton.IVProps> = props => {
    const { name, type, onClick } = props;

    return (
        <button
            type={type ? type : "button"}
            css={ButtonStyle()}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

const ButtonStyle = (
    fontSize?: number,
    color?: string,
    backgroundColor?: string
) => css`
    padding: 10px;
    height: 50px;
    min-width: 180px;
    border-radius: 5px;
    background-color: ${backgroundColor ? backgroundColor : "#4C87DF"};
    font-size: ${fontSize ? fontSize : 24}px;
    color: ${color ? color : "#fff"};
    text-align: center;
    border: none;
    cursor: pointer;
`;

export default VButton;
