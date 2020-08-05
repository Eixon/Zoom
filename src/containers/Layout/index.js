import React from "react";
import { Layout } from "antd";

import Header from "./Header";
import Footer from "./Footer";

const CustomLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header />
      {children}
      <Footer />
    </Layout>
  );
};

export default CustomLayout;
