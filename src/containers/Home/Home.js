import React from "react";
import { Button } from "antd";
import { translate } from "react-i18next";

import HomeLayout from "../Layout/Layout";

import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <HomeLayout>
        <div className="Home">
          <header className="Home-header">
            <p>
              {this.props.t("hello", { framework: "react-i18next" }) +
                " " +
                this.props.t("how", { framework: "react-i18next" })}
            </p>

            <div className="Home-buttons">
              <Button
                disabled={this.props.lang === "fr"}
                onClick={() => this.props.i18n.changeLanguage("fr")}
              >
                Français
              </Button>
              <Button
                disabled={this.props.lang === "en"}
                onClick={() => this.props.i18n.changeLanguage("en")}
              >
                English
              </Button>
            </div>
          </header>
        </div>
      </HomeLayout>
    );
  }
}

export default translate("common")(Home);
