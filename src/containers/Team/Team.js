import React from "react";
import * as classNames from "classnames";

import team from "../../utils/team";

import "./Team.css";

const Team = () => {
  return (
    <div className={classNames("team", "team-position")}>
      {team.map(member => (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={classNames("team-card", "team-card-space")}
        >
          <img
            className="team-card-photo"
            src={member.photo}
            alt={member.firstname}
          />
          <span>{member.lastname}</span>
          <span>{member.firstname}</span>
        </div>
      ))}
    </div>
  );
};

export default Team;
