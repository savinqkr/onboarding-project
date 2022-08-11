import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";
import authService from "@User/services/auth.service";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues, setValue } = useForm<
        ILoginForm.IForm
    >();
    const router = useRouter();

    // get signature
    const {
        data: loginSignatureData,
        refetch: loginSignatureRefetch,
    } = useQuery(
        ["get_login_signature"],
        () =>
            authService.getSignature({
                accountName: getValues("login_accountName"),
                privateKey: String(process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY),
                // privateKey: getValues("login_privateKey"),
            }),
        {
            enabled: false,
            cacheTime: 0,
        }
    );

    // login user
    const { data: loginUserData, refetch: loginUserRefetch } = useQuery(
        ["login_user"],
        () =>
            authService.loginUser({
                accountName: getValues("login_accountName"),
                signature: String(loginSignatureData),
            }),
        {
            enabled: false,
            cacheTime: 0,
        }
    );

    const onSubmit = () => {
        if (
            getValues("login_accountName") === "" ||
            getValues("login_privateKey") === ""
        ) {
            alert("AccountName과 PrivateKey를 입력해주세요.");
            return;
        }
        loginSignatureRefetch();
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // console.log("---- LOGIN ----");
        // console.log(`ID : ${getValues("login_accountName")}  PK : ${getValues("login_privateKey")}`);

        // loginSignatureRefetch();
        // console.log("---- LOGIN : Signature ----");
        // console.log(loginSignatureData);
        // loginUserRefetch();
        // console.log("---- LOGIN : Tokens ----");
        // console.log(loginUserData);

        // if (loginUserData !== undefined) {
        //     window.localStorage.setItem(
        //         "userTokens",
        //         JSON.stringify(loginUserData)
        //     );
        //     console.log("---- tokens saved in localStorage ----");
        // }
        // router.push("/");
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
            // setValue("login_accountName", "");
            // setValue("login_privateKey", "");
            router.push("/");
        }
    }, [loginUserData]);

    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
