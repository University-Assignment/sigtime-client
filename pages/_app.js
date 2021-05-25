import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>SigTime</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
