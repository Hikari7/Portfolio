import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";

export default function Home() {
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
}
