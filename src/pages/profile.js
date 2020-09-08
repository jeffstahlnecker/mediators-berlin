import React from "react";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import Text from "../components/Text";
import ProfileQuote from "../components/ProfileQuote";

export default function Home() {
  return (
    <Layout>
      <ProfileHead />
      <ProfileQuote />
      <Text />
    </Layout>
  );
}
