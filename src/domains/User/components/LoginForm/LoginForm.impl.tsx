import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";
import authService from "@User/services/auth.service";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ILoginForm.IForm>();
    const router = useRouter();

    // Get Signature
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

    /**
     * Login User
     * @param accountName
     * @param signature
     * @returns -- accessToken, refreshToken
     */
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

    const onSubmit = () => {
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
        if (loginSignatureData !== undefined) {
            loginUserRefetch();
        }
    }, [loginSignatureData]);

    useEffect(() => {
        if (loginUserData !== undefined) {
            console.log(loginUserData);
            window.localStorage.setItem(
                "userTokens",
                JSON.stringify(loginUserData)
            );
            router.push("/");
        }
    }, [loginUserData]);

    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
