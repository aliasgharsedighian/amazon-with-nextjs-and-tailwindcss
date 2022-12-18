import { AppProps } from 'next/app'
import "../styles/globals.css";
// import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
  //  Session Provider must be here for when next-auth active
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    
  );
};

export default MyApp;
