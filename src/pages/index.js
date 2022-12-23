import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import {
  mainText,
  btn,
  main,
  mainBg,
  bg,
  img,
  mainWrapper,
} from "../styles/home.module.scss";
import portfolio from "../images/portfolio.jpg";

export default function Home() {
  return (
    <Layout>
      <div className={bg}>
        <main className={main}>
          <div className={mainBg}></div>
          <div className={mainWrapper}>
            <div className={mainText}>
              <h1>Hi, I'm Hikari</h1>
              <h2>
                A front end developer
                <br></br>
                based in Vancouver
              </h2>
              <button className={btn}>
                <Link to="/contact">Contact me</Link>
              </button>
            </div>
            <div>
              <img src={portfolio} alt="profile" className={img} />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
