import React from "react";

import CustomLayout from "../Layout";

import ImageCarousel from "./Carousel";
import Contact from "./Contact";
import Team from "./Team";

const Home = () => {
  return (
    <CustomLayout>
      <div className="content">
        <ImageCarousel />
        <Contact />
        <Team />
      </div>
    </CustomLayout>
  );
};

export default Home;
