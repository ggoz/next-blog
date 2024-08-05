import Head from "next/head";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  console.log("App render");

  return (
    <>
      <Head>
        <link rel='icon' href='/icons/favicon.ico' />
      </Head>
      <header>
        <NavBar></NavBar>
      </header>
      <Component {...pageProps}></Component>
    </>
  );
};

export default App;
