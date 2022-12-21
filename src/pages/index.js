import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { test, btn } from "../styles/home.module.scss";


export default function Home() {
  return (
    <Layout>
      <section>
        <div>
          <section className={test}>
            <h2>Hi there, I'm Hikari👋</h2>
            <p>A front end developer based in Vancouver</p>
          </section>
          <button className={btn}>
            <Link to="/contact">Contact me</Link>
          </button>
        </div>
      </section>
    </Layout>
  );
}
