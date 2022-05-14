import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="OQ7SApcp5t3oxGrXNZZHPxEt3RJ07JAJJedTje4V"
      serverUrl="https://hilheqlhztjj.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
