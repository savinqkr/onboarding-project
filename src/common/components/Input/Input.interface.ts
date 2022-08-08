import { UseFormRegister } from "react-hook-form";

export namespace IInput {
    export interface IProps {
        type: string;
        width: number;
        height: number;
        placeholder?: string;
    }
    export interface IVProps extends IProps {}
}
