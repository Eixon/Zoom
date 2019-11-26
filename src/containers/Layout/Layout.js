import React from "react";
import { Layout } from "antd";

import "./Layout.css";

const { Header, Footer, Content } = Layout;

const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="Layout-header">Header</Header>
      <Content>{children}</Content>
      <Footer className="Layout-footer">Footer</Footer>
    </Layout>
  );
};

export default HomeLayout;
