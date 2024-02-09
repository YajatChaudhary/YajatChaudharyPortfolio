"use client"
import React from "react";
import styles from "./home.module.scss";
import { SideBar } from "@/components/nav/SideBar";
import { Heading } from "@/components/nav/Heading";
import { Hero } from "./hero/hero/Hero";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";
// import { Projects } from "./projects/Projects";

const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <SideBar/>
        <main id="main">
          <Heading/>
          <Hero/>
          <About/>
          {/* <Projects/> */}
          <Experience/>
          <Contact/>
          <div
            style={{
              height: "200px",
            }}
          />
        </main>
      </div>
    </>
  );
};
export default Home;