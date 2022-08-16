import { UseFormRegister } from "react-hook-form";

export namespace ISignUpForm {
    export interface IProps {}
    export interface IVProps {
        register: UseFormRegister<IForm>;
        onSubmitRegisterUser: () => void;
        onClickGetSignature: () => void;
    }
    export interface IForm {
        registerAccountName: string;
        registerNickname: string;
        registerSignature: string;
    }
}
