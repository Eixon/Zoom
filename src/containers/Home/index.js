import React from "react";

import CustomLayout from "../Layout";

import ImageCarousel from "./Carousel";
// import Contact from "./Contact";
import About from "./About";
import Menu from "./Menu";

const Home = () => {
  return (
    <CustomLayout>
      <div className="content">
        <ImageCarousel />
        {/* <Contact /> */}
        <About />
        <Menu />
      </div>
    </CustomLayout>
  );
};

export default Home;
