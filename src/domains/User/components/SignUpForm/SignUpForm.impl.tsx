import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import authService from "../../services/auth.service";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<
        ISignUpForm.IForm
    >();

    const router = useRouter();

    // get signature
    const {
        data: registerSignatureData,
        refetch: registerSignatureRefetch,
    } = useQuery(
        ["get_register_signature"],
        () =>
            authService.getSignature({
                accountName: getValues("register_accountName"),
                privateKey: String(process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY),
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
        registerSignatureRefetch();
    };

    const onSubmit = () => {
        // console.log("--- Register ---");
        // console.log(getValues("register_accountName"));
        // console.log(getValues("register_nickname"));
        // console.log(getValues("register_signature"));
        if (registerSignatureData !== undefined) {
            registerUserRefetch();
        }
    };

    useEffect(() => {
        // console.log("--- Register : Signature ---");
        // console.log(registerSignatureData);
        if (registerSignatureData !== undefined) {
            setValue("register_signature", String(registerSignatureData));
        }
    }, [registerSignatureData]);

    useEffect(() => {
        // console.log("--- Register : Tokens ---");
        // console.log(registerUserData);
        if (registerUserData !== undefined) {
            const answer = confirm(
                "회원가입이 완료되었습니다. 로그인 하시겠습니까?"
            );
            answer && router.push("/login");
        }
    }, [registerUserData]);

    return (
        <VSignUpForm
            register={register}
            onSubmit={handleSubmit(onSubmit)}
            getSignature={getSignature}
        />
    );
};

export default SignUpForm;
