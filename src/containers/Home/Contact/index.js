import React from "react";
import * as classNames from "classnames";

import "./Contact.css";

const Contact = () => {
  return (
    <div className={classNames("contact", "contact-position")}>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        style={{
          padding: 20,
          fontSize: 20,
          fontWeight: "bold",
          justifyContent: "center",
        }}
      >
        <p>Telephone Number</p>
        <p>
          Adress Line 1
          <br />
          Adress Line 2
        </p>
      </div>
      <img
        data-aos="flip-up"
        data-aos-duration="1000"
        src={require("../../../assets/map.png")}
        alt="map"
        className={classNames("map-img", "map-size")}
      />
    </div>
  );
};

export default Contact;
