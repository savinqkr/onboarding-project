import { UseFormRegister } from "react-hook-form";

export namespace ILoginForm {
    export interface IProps {
        backgroundColor?: string;
        register: UseFormRegister<IForm>;
        onSubmit: () => void;
    }
    export interface IVProps extends IProps {}
    export interface IForm {
        id: string;
        password: string;
    }
}
