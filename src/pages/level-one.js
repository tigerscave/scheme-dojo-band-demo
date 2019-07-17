import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { levelOne } from "../statics/userScores";

const LevelOnePage = () => {
  return (
    <div>
      <div className="profile">
        <h1>Level One Required Belt</h1>
      </div>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={levelOne} />
        ))}
      </div>
      <style jsx="true">{`
        div.profile {
          display: flex;
          flex-direction: row;
          margin: 1rem;
        }
        div.content {
          display: flex;
        }
        img {
          width: 5rem;
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
};

export default LevelOnePage;
