import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "../../styles/global.scss";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <>
    <Helmet
      title="Hikari | Portfolio"
      meta={[
        { name: "description", content: "Hikari Kobe | Portfolio website" },
        { name: "keywords", content: "Frontend developer, designer, React" },
        { name: "author", content: "Hikari Kobe" },
      ]}
    />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
