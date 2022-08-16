import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";
import authService from "../../services/auth.service";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues, setValue } =
        useForm<ISignUpForm.IForm>();
    const router = useRouter();

    // getSignature (register) -- useQuery
    const { data: registerSignatureData, refetch: registerSignatureRefetch } =
        useQuery(
            ["getRegisterSignature"],
            () => {
                return authService.getSignature({
                    accountName: getValues("registerAccountName"),
                    privateKey: String(
                        process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    ),
                });
            },
            {
                enabled: false,
                cacheTime: 0,
            }
        );

    // registerUser -- useQuery
    const { data: registerUserData, refetch: registerUserRefetch } = useQuery(
        ["register_user"],
        () =>
            authService.registerUser({
                accountName: getValues("registerAccountName"),
                nickname: getValues("registerNickname"),
                signature: String(registerSignatureData),
            }),
        {
            enabled: false,
        }
    );

    // onClickGetSignature
    const onClickGetSignature = () => registerSignatureRefetch();

    // onSubmitRegisterUser
    const onSubmitRegisterUser = () => {
        if (!registerSignatureData) return;
        registerUserRefetch();
    };

    useEffect(() => {
        if (!registerSignatureData) return;
        setValue("registerSignature", String(registerSignatureData));
    }, [registerSignatureData]);

    useEffect(() => {
        if (!registerUserData) return;
        const answer = window.confirm(
            "회원가입이 완료되었습니다. 로그인 하시겠습니까?"
        );
        answer && router.push("/login");
    }, [registerUserData]);

    return (
        <VSignUpForm
            register={register}
            onSubmitRegisterUser={handleSubmit(onSubmitRegisterUser)}
            onClickGetSignature={onClickGetSignature}
        />
    );
};

export default SignUpForm;
