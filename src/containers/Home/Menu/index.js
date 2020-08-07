import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-item">
        <h1>See our entertaining tours plans!</h1>
        <Link to="/tours">
          <Button type="default">See it now!</Button>
        </Link>
      </div>
      <div className="menu-item">
        <h1>Rent us one of our beautiful vehicles!</h1>
        <Link to="/tours">
          <Button type="default">See it now!</Button>
        </Link>
      </div>
      <div className="menu-item">
        <h1>Looking for a retailer? There it is!</h1>
        <Link to="/tours">
          <Button type="default">See it now!</Button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
