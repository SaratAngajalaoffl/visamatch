import type { AppProps } from "next/app";

import AuthContextProvider from "@/components/contexts/AuthContext";

import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    );
}
