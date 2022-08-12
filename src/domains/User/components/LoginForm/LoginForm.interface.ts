import { UseFormRegister } from "react-hook-form";

export namespace ILoginForm {
    export interface IProps {
        backgroundColor?: string;
    }
    export interface IVProps {
        register: UseFormRegister<IForm>;
        onSubmit: () => void;
    }
    export interface IForm {
        loginAccountName: string;
        loginPrivateKey: string;
    }
}
