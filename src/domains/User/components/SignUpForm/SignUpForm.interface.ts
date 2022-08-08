import { UseFormRegister } from "react-hook-form";

export namespace ISignUpForm {
    export interface IProps {}
    export interface IVProps {
        register: UseFormRegister<IForm>;
        onSubmit: () => void;
    }
    export interface IForm {
        register_id: string;
        register_nickname: string;
        register_signature: string;
    }
}
