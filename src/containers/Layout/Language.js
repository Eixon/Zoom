import React from "react";
import { Popover, Button } from "antd";
import { translate } from "react-i18next";

import "./Layout.css";

const Language = ({ i18n, lang, t }) => {
  return (
    <Popover
      className="Layout_language"
      content={
        <div className="Layout_language_list">
          <Button
            disabled={lang === "fr"}
            onClick={() => i18n.changeLanguage("fr")}
          >
            Français
          </Button>
          <Button
            disabled={lang === "en"}
            onClick={() => i18n.changeLanguage("en")}
          >
            English
          </Button>
        </div>
      }
    >
      <Button type="primary" style={{ width: 120 }}>
        {t("language")}
      </Button>
    </Popover>
  );
};

export default translate("common")(Language);
