import React from "react";
import { Layout } from "antd";
import { Link } from "react-router-dom";

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
      <div className="header-navbar">
        <Link to="/" className="header-navbar-button">
          <span className="header-navbar-button-text">HOME</span>
        </Link>
        <Link to="/tours" className="header-navbar-button">
          <span className="header-navbar-button-text">TOURS</span>
        </Link>
        <Link to="/rent" className="header-navbar-button">
          <span className="header-navbar-button-text">RENT</span>
        </Link>
        <Link to="/retail" className="header-navbar-button">
          <span className="header-navbar-button-text">RETAIL</span>
        </Link>
      </div>
    </Header>
  );
};

export default CustomHeader;
