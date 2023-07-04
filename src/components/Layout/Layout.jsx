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
        { name: "description", content: "I'm Hikari Kobe, a front-end developer based in Vancouver, Canada." },
        { name: "keywords", content: "Frontend developer, designer, React" },
        { name: "author", content: "Hikari Kobe" },
        { name: "title", content: "Hikari Kobe | Web developer" },
      ]}
    />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </>
);

export default Layout;
