import { useForm } from "react-hook-form";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ILoginForm.IForm>();

    const onSubmit = () => {
        alert(`${getValues("id")}, ${getValues("password")}`);
    };
    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
