import React from "react";
import * as classNames from "classnames";

import team from "../../../utils/team";

import "./About.css";

const Team = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">WHO ARE WE?</h1>
      <div className={classNames("team", "team-position")}>
        {team.map((member, index) => (
          <div
            key={index}
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
      <p>
        French friends and Japan lovers who are willing to make people enjoy
        their trip in Japan, we love Japanese culture and we want to share it to
        people so the idea to offer visits through Tokyo on motorized vehicles
        but environment-respectfully was the best thing we could think to
        satisfy everyone's wish!
      </p>
      <p>
        Let us drive through every famous Tokyo places, in a way you've never
        experienced before, such as Shibuya, Ginza, Akihabara, the Rainbow
        Bridge and more!
      </p>
    </div>
  );
};

export default Team;
