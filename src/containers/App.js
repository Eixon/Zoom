import React from "react";

import { Header, Footer } from "./Layout";
import ImageCarousel from "./Carousel/Carousel";
import Contact from "./Contact/Contact";
import Team from "./Team/Team";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <ImageCarousel />
          <Contact />
          <Team />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
