import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";
import authService from "@domains/User/services/auth.service";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues, setValue } =
        useForm<ILoginForm.IForm>();
    const router = useRouter();

    // get signature
    const { data: loginSignatureData, refetch: loginSignatureRefetch } =
        useQuery(
            ["get_login_signature"],
            () =>
                authService.getSignature({
                    accountName: getValues("login_accountName"),
                    privateKey: getValues("login_privateKey"),
                    // privateKey: String(
                    //     process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    // ),
                }),
            {
                enabled: false,
                // enabled: true,
            }
        );

    // login user
    const { data: loginUserData, refetch: loginUserRefetch } = useQuery(
        ["login_user"],
        () =>
            authService.loginUser({
                accountName: getValues("login_accountName"),
                signature: String(loginSignatureData),
                // signature:
                //     "SIG_K1_KcTVtmxJK7TnG1AfXx9TpZyhHqW3FFRdHjzQWyPN6NrrLtZLo83zKaQ5Kv4ZXDV4TMaE3jvFiig1Rqup8r3evK3TfqqeoE",
            }),
        {
            enabled: false,
            // enabled: loginSignatureData !== undefined,
        }
    );

    const onSubmit = () => {
        // console.log("---- LOGIN ----");
        // console.log(`ID : ${getValues("login_accountName")}  PK : ${getValues("login_privateKey")}`);

        loginSignatureRefetch();
        // console.log("---- LOGIN : Signature ----");
        // console.log(loginSignatureData);

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
        // console.log("loginSignatureData >>> ");
        // console.log(loginSignatureData);
        if (loginSignatureData !== undefined) {
            loginUserRefetch();
        }
        // console.log("---- LOGIN : Tokens ----");
        // console.log(loginUserData);
    }, [loginSignatureData]);

    useEffect(() => {
        // console.log("loginUserData >>> ");
        // console.log(loginUserData);
        if (loginUserData !== undefined) {
            window.localStorage.setItem(
                "userTokens",
                JSON.stringify(loginUserData)
            );
            // console.log("---- tokens saved in localStorage ----");
            // console.log(
            //     `ID : ${getValues("id")} PK : ${getValues("privateKey")}`
            // );
            setValue("login_accountName", "");
            setValue("login_privateKey", "");
            router.push("/");
        }
    }, [loginUserData]);

    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
