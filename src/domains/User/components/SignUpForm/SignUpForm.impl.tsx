import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import authService from "../../services/auth.service";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ISignUpForm.IForm>();

    // get signature
    const { data: registerSignatureData, refetch: registerSignatureRefetch } =
        useQuery(
            ["get_register_signature"],
            () =>
                authService.getSignature({
                    accountName: getValues("register_accountName"),
                    privateKey: String(
                        process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    ),
                }),
            {
                enabled: false,
                // cacheTime: 0,
            }
        );

    // register user
    const { data: registerUserData, refetch: registerUserRefetch } = useQuery(
        ["register_user"],
        () =>
            authService.registerUser({
                accountName: getValues("register_accountName"),
                nickname: getValues("register_nickname"),
                signature: String(registerSignatureData),
                // signature:
                //     "SIG_K1_K1A3DGJ8odwhtRs3QHuJJBeidWTojMugJEmZHUaswiLRvewT51Js22R5PD4rLgZJixTAqRFJw4x52EGeeDriXWEEVor7P8",
            }),
        {
            enabled: false,
        }
    );

    const getSignature = () => {
        if (
            getValues("register_accountName") === "" ||
            getValues("register_nickname") === ""
        ) {
            alert("AccountName, Nickname");
        }
        registerSignatureRefetch();
    };

    const onSubmit = () => {
        console.log(getValues("register_accountName"));
        console.log(getValues("register_nickname"));
        console.log(getValues("register_signature"));
        if (registerSignatureData !== undefined) {
            registerUserRefetch();
        }
    };

    useEffect(() => {
        console.log("--- Register : signature ---");
        console.log(registerSignatureData);
    }, [registerSignatureData]);

    return (
        <VSignUpForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            getSignature={getSignature}
        />
    );
};

export default SignUpForm;
