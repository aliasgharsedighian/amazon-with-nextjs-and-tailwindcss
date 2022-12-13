import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { store } from "../app/store";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
};

export default MyApp;
