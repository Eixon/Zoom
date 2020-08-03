import React from "react";
import * as classNames from "classnames";

import "./Layout.css";

const Footer = () => {
  return (
    <footer className={classNames("footer", "footer-position")}>
      <p className={classNames("footer-brand", "footer-brand-size")}>
        ZOOM Street Tours Tokyo and the ZOOM Street Tours Tokyo Logo are service
        marks licensed to ZOOM Street Tours Tokyo LLC and used with permission.
      </p>
      <img
        src={require("../../assets/logo.png")}
        alt="logo"
        title="logo"
        className="footer-logo"
      />
    </footer>
  );
};

export default Footer;
