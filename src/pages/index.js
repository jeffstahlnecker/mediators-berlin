import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Content from "../components/Content";
import Seo from "../components/Seo"

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Content />
    </Layout>
  );
}
