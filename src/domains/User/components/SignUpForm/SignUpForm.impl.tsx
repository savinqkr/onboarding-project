import { useForm } from "react-hook-form";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ISignUpForm.IForm>();

    const onSubmit = () => {
        console.log(
            `${getValues("register_id")}, ${getValues(
                "register_nickname"
            )}, ${getValues("register_signature")}`
        );
    };
    return (
        <VSignUpForm register={register} onSubmit={handleSubmit(onSubmit)} />
    );
};

export default SignUpForm;
