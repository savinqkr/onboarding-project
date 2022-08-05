import { css } from "@emotion/react";
import { useForm } from "react-hook-form";
import { IInput } from "./Input.interface";

const VInput: React.FC<IInput.IVProps> = props => {
    const { type, width, height, placeholder } = props;
    // const { register } = useForm;
    return (
        <input
            css={InputStyle(width, height)}
            type={type}
            placeholder={placeholder}
            // {...register()}
        />
    );
};

const InputStyle = (width: number, height: number) => css`
    width: ${width}px;
    height: ${height}px;
    margin: 10px;
`;

export default VInput;
