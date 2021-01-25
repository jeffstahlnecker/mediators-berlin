import React from "react";
import Layout from "../components/Layout";
import Mediators from "../components/Mediators";
import Seo from "../components/Seo";

const Netzwerk = () => {
  return (
    <Layout>
      <Seo title="Netzwerk" language="de-DE" />
      <Mediators />
    </Layout>
  );
};

export default Netzwerk;
