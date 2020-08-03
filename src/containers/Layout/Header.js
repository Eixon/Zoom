import React from "react";
import { Layout } from "antd";

import "./Layout.css";

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ height: 100 }} className="header">
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        title="logo"
        className="header-logo"
        style={{ padding: 10 }}
      />
    </Header>
  );
};

export default CustomHeader;
