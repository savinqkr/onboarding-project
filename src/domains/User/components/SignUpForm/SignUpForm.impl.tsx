import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import authService from "../../services/auth.service";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ISignUpForm.IForm>();

    // // get signature
    // const {
    //     data: getRegisterSignatureData,
    //     refetch: getRegisterSignatureRefetch,
    // } = useQuery(
    //     ["get_register_signature"],
    //     () =>
    //         authService.getSignature({
    //             accountName: getValues("register_id"),
    //             privateKey:
    //                 "5KkZqAYZWheCpSpLbFL5jukiRQ6cdB87oPXpo4BaMxx4k4vUCLR",
    //             // privateKey: String(process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY),
    //         }),
    //     {
    //         enabled: false,
    //     }
    // );

    // // register user
    // const { data: registerUserData, refetch: registerUserRefetch } = useQuery(
    //     ["register_user"],
    //     () => {
    //         authService.registerUser({
    //             accountName: getValues("register_id"),
    //             nickname: getValues("register_nickname"),
    //             signature: String(getRegisterSignatureData),
    //         }),
    //             {
    //                 enabled: false,
    //             };
    //     }
    // );

    const onSubmit = () => {
        console.log("---- SIGNUP ----");
        // getRegisterSignatureRefetch();
    };

    // useEffect(() => {
    //     console.log("Register Signature >>> ");
    //     console.log(getRegisterSignatureData);
    //     if (getRegisterSignatureData !== undefined) {
    //         // registerUserRefetch();
    //         console.log(
    //             `ID : ${getValues("register_id")}, Nickname : ${getValues(
    //                 "register_nickname"
    //             )}, Signature : ${getRegisterSignatureData}`
    //         );
    //     }
    //     console.log("---------------");
    // }, [getRegisterSignatureData]);

    // useEffect(() => {
    //     console.log("Register User >>> ");
    //     console.log(registerUserData);
    // }, [registerUserData]);

    return (
        <VSignUpForm register={register} onSubmit={handleSubmit(onSubmit)} />
    );
};

export default SignUpForm;
