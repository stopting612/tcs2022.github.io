import "../styles/globals.css";
import { Session } from "next-auth";
import type { AppProps } from "next/app";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from 'next-i18next'

function MyApp({
  Component,
  pageProps
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <main>
            <Component {...pageProps} />
        </main>
        <Footer />
      </SessionProvider>
    </>
  );
}


export default appWithTranslation(MyApp);
