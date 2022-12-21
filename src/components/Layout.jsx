import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

//ここでglobal.scssを反映させている
import "../styles/global.scss";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
