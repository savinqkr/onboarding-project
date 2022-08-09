import { useForm } from "react-hook-form";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import authService from "@domains/User/services/auth.service";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ILoginForm.IForm>();
    const router = useRouter();

    // get signature
    const { data: getLoginSignatureData, refetch: getLoginSignatureRefetch } =
        useQuery(
            ["get_login_signature"],
            () =>
                authService.getSignature({
                    accountName: getValues("id"),
                    // privateKey: getValues("privateKey"),
                    privateKey: String(
                        process.env.NEXT_PUBLIC_HASURA_PRIVATEKEY
                    ),
                }),
            {
                enabled: false,
            }
        );

    // login user
    const { data: loginUserData, refetch: loginUserRefetch } = useQuery(
        ["login_user"],
        () =>
            authService.loginUser({
                accountName: getValues("id"),
                signature: String(getLoginSignatureData),
                // signature:
                //     "SIG_K1_KcTVtmxJK7TnG1AfXx9TpZyhHqW3FFRdHjzQWyPN6NrrLtZLo83zKaQ5Kv4ZXDV4TMaE3jvFiig1Rqup8r3evK3TfqqeoE",
            }),
        {
            enabled: false,
        }
    );

    const onSubmit = () => {
        // console.log("---- LOGIN ----");
        // console.log(`ID : ${getValues("id")}  PK : ${getValues("privateKey")}`);
        getLoginSignatureRefetch();
        console.log(getLoginSignatureData);
        loginUserRefetch();
        console.log(loginUserData);
        if (loginUserData !== undefined) {
            window.localStorage.setItem(
                "userTokens",
                JSON.stringify(loginUserData)
            );
        }
        router.push("/");
        // console.log("---------------");
    };

    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
