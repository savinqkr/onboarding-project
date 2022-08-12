import { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import authService from "../../services/auth.service";
import { ISignUpForm } from "./SignUpForm.interface";
import VSignUpForm from "./SignUpForm.view";

const SignUpForm: React.FC<ISignUpForm.IProps> = () => {
    const { register, handleSubmit, getValues, setValue } =
        useForm<ISignUpForm.IForm>();
    const router = useRouter();

    /**
     * Get Signature
     * @param accountName
     * @param privateKey
     * @returns signature
     */
    const { data: registerSignatureData, refetch: registerSignatureRefetch } =
        useQuery(
            ["getRegisterSignature"],
            () =>
                authService.getSignature({
                    accountName: getValues("registerAccountName"),
                    privateKey: String(
                        process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    ),
                }),
            {
                enabled: false,
                cacheTime: 0,
            }
        );

    /**
     * Register User
     * @param accountName
     * @param nickname
     * @param signature
     * @returns -- accessToken, refreshToken
     */
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

    const getSignature = () => {
        registerSignatureRefetch();
    };

    const onSubmit = () => {
        if (registerSignatureData !== undefined) {
            registerUserRefetch();
        }
    };

    useEffect(() => {
        if (registerSignatureData !== undefined) {
            setValue("registerSignature", String(registerSignatureData));
        }
    }, [registerSignatureData]);

    useEffect(() => {
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
