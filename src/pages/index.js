import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Mediators from "../components/Mediators";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Content />
      <Mediators />
    </Layout>
  );
}
