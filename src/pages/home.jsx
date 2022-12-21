import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

const home = () => {
  return (
    <Layout>
      <section>
        <div>
          <h2>Hi there, I'm Hikari👋</h2>
          <p>A front end developer based in Vancouver</p>
          <Link to="/contact">Contact me</Link>
        </div>
      </section>
    </Layout>
  );
};

export default home;
