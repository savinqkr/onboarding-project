import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";
import authService from "@User/services/auth.service";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const router = useRouter();
    const { register, handleSubmit, getValues } = useForm<ILoginForm.IForm>();

    // getSignature (login) -- useQuery
    const { data: loginSignatureData, refetch: loginSignatureRefetch } =
        useQuery(
            ["getLoginSignature"],
            () =>
                authService.getSignature({
                    accountName: getValues("loginAccountName"),
                    privateKey: String(
                        process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    ),
                }),
            {
                enabled: false,
                cacheTime: 0,
            }
        );

    // loginUser -- useQuery
    const { data: loginUserData, refetch: loginUserRefetch } = useQuery(
        ["loginUser"],
        () =>
            authService.loginUser({
                accountName: getValues("loginAccountName"),
                signature: String(loginSignatureData),
            }),
        {
            enabled: false,
            cacheTime: 0,
        }
    );

    // onClickLoginUser
    const onClickLoginUser = () => {
        if (
            getValues("loginAccountName") === "" ||
            getValues("loginPrivateKey") === ""
        ) {
            alert("AccountName과 PrivateKey를 입력해주세요.");
            return;
        }
        loginSignatureRefetch();
    };

    useEffect(() => {
        if (!loginSignatureData) return;
        loginUserRefetch();
    }, [loginSignatureData]);

    useEffect(() => {
        if (!loginUserData) return;
        window.localStorage.setItem(
            "accessToken",
            String(loginUserData.accessToken)
        );
        window.localStorage.setItem(
            "refreshToken",
            String(loginUserData.refreshToken)
        );
        router.push("/");
    }, [loginUserData]);

    return (
        <VLoginForm
            register={register}
            onClickLoginUser={handleSubmit(onClickLoginUser)}
        />
    );
};

export default LoginForm;
