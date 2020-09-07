import React from "react";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import ProfileText from "../components/ProfileText";
import ProfileQuote from "../components/ProfileQuote";

export default function Home() {
  return (
    <Layout>
      <ProfileHead />
      <ProfileQuote />
      <ProfileText />
    </Layout>
  );
}
