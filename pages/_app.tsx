import { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import Auth from "../components/Auth";
import "../styles/globals.css";
import "../data/firebase/clientApp";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
                />
            </Head>
            <RecoilRoot>
                <Auth />
                <Component {...pageProps} />
            </RecoilRoot>
        </>
    );
}

export default MyApp;
