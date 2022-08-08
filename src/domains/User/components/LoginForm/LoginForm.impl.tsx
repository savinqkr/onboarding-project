import { useForm } from "react-hook-form";
import { ILoginForm } from "./LoginForm.interface";
import VLoginForm from "./LoginForm.view";

import { useQueries, useQuery } from "react-query";
import authService from "@domains/User/services/auth.service";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { access } from "fs";

const LoginForm: React.FC<ILoginForm.IProps> = () => {
    const { register, handleSubmit, getValues } = useForm<ILoginForm.IForm>();
    const router = useRouter();
    /*
    const { data, refetch } = useQuery(
        ["get_signature"],
        () =>
            // authService.getSignature({
            //     accountName: getValues("id"),
            //     privateKey: getValues("privateKey"),
            // }),
            authService.loginUser({
                accountName: "day1coll2.p",
                signature:
                    "SIG_K1_KcTVtmxJK7TnG1AfXx9TpZyhHqW3FFRdHjzQWyPN6NrrLtZLo83zKaQ5Kv4ZXDV4TMaE3jvFiig1Rqup8r3evK3TfqqeoE",
            }),
        {
            enabled: false,
        }
    );
    useEffect(() => {
        console.log(data);
    }, [data]);
    const onSubmit = () => {
        console.log(`${getValues("id")}, ${getValues("privateKey")}`);
        refetch();
    };
    */

    const result = useQueries([
        {
            queryKey: ["get_signature"],
            queryFn: () =>
                authService.getSignature({
                    accountName: getValues("id"),
                    privateKey: getValues("privateKey"),
                }),
        },
        {
            queryKey: ["login_user"],
            queryFn: () =>
                authService.loginUser({
                    accountName: getValues("id"),
                    signature:
                        "SIG_K1_KcTVtmxJK7TnG1AfXx9TpZyhHqW3FFRdHjzQWyPN6NrrLtZLo83zKaQ5Kv4ZXDV4TMaE3jvFiig1Rqup8r3evK3TfqqeoE",
                }),
        },
    ]);

    const onSubmit = () => {
        console.log(`ID : ${getValues("id")}, PW : ${getValues("privateKey")}`);
        // console.log(result);
        const now = new Date();
        const tokenInfo = {
            "access-token": result[1].data?.accessToken,
            "refresh-token": result[1].data?.refreshToken,
            expire: now.getTime() + 1 * 60 * 60 * 1000,
        };
        // console.log(tokenInfo);
        window.localStorage.setItem("tokens", String(tokenInfo));
        router.push("/");
    };

    return <VLoginForm register={register} onSubmit={handleSubmit(onSubmit)} />;
};

export default LoginForm;
