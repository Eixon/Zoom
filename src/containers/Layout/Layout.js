import React from "react";
import { Layout } from "antd";

import "./Layout.css";
import Language from "./Language";

const { Header, Footer, Content } = Layout;

const HomeLayout = ({ children }) => {
  return (
    <Layout>
      <Header className="Layout-header">
        <Language />
      </Header>
      <Content>{children}</Content>
      <Footer className="Layout-footer">Footer</Footer>
    </Layout>
  );
};

export default HomeLayout;
