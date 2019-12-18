import React from "react";
import { translate } from "react-i18next";

import HomeLayout from "../Layout/Layout";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <div className="Home">
          <div className="Home-header">
            <p>
              {this.props.t("hello", { framework: "react-i18next" }) +
                " " +
                this.props.t("how", { framework: "react-i18next" })}
            </p>
          </div>
        </div>
      </HomeLayout>
    );
  }
}

export default translate("common")(Home);
