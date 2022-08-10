import { css } from "@emotion/react";
import { IButton } from "./Button.interface";

const VButton: React.FC<IButton.IVProps> = props => {
    const {
        name,
        type,
        width,
        height,
        fontSize,
        color,
        backgroundColor,
        onClick,
    } = props;

    return (
        <button
            type={type ? type : "button"}
            css={ButtonStyle(width, height, fontSize, color, backgroundColor)}
            onClick={onClick}
        >
            {name}
        </button>
    );
};

const ButtonStyle = (
    width?: number,
    height?: number,
    fontSize?: number,
    color?: string,
    backgroundColor?: string
) => css`
    padding: 10px;
    height: ${height ? height : 40}px;
    width: ${width ? width : 140}px;
    border-radius: 5px;
    background-color: ${backgroundColor ? backgroundColor : "#4C87DF"};
    font-size: ${fontSize ? fontSize : 22}px;
    color: ${color ? color : "#fff"};
    text-align: center;
    border: none;
    cursor: pointer;
`;

export default VButton;
