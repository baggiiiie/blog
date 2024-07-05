import React from "react";
import { ThemeProvider } from "../components/ThemeProvider";
import "../global.css";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
