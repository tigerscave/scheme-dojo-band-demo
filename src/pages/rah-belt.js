import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { rah } from "../statics/userScores";

const RahBeltPage = () => {
  return (
    <div>
      <h1>Rahmat's Belt</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={rah}/>
        ))}
      </div>
      <style jsx="true">{`
        div.content {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default RahBeltPage;
