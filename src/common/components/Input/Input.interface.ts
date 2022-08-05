import { UseFormRegister } from "react-hook-form";

export namespace IInput {
    export interface IProps {
        type: string;
        width: number;
        height: number;
        placeholder?: string;
        // regiKey: string;
        // register: UseFormRegister<IForm>;
    }
    export interface IVProps extends IProps {}
}
