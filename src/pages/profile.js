import React from "react";
import Layout from "../components/Layout";
import ProfileHead from "../components/ProfileHead";
import ProfileBackground from "../components/ProfileBackground";
import ProfileMeditation from "../components/ProfileMeditation";

export default function Home() {
  return (
    <Layout>
      This will be the template for individuals profiles
      <ProfileHead />
      <ProfileBackground />
      <ProfileMeditation />
    </Layout>
  );
}
