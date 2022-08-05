import "../styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "@/common/components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    // return <Component {...pageProps} />
    return (
        <RecoilRoot>
            {/* <Header /> 질문!! */}
            <Component {...pageProps} />
        </RecoilRoot>
    );
}

console.log();

export default MyApp;
