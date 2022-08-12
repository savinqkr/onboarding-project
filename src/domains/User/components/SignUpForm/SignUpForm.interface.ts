import { UseFormRegister } from "react-hook-form";

export namespace ISignUpForm {
    export interface IProps {}
    export interface IVProps {
        register: UseFormRegister<IForm>;
        onSubmit: () => void;
        getSignature: () => void;
    }
    export interface IForm {
        registerAccountName: string;
        registerNickname: string;
        registerSignature: string;
    }
}
