import { QueryClient, QueryClientProvider } from "react-query";
import { Layout } from "@common/components";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Head from "next/head";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>IBCT | onBoarding</title>
                <meta
                    name="descripttion"
                    content="This is onboarding project from IBCT"
                ></meta>
            </Head>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </RecoilRoot>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
