import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/globals.css";
import "../components/styles/header.css";
import "../components/styles/footer.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component className="component" {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
