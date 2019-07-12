import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { zigen } from "../statics/userScores";

const ZigenBeltPage = () => {
  return (
    <div>
      <h1>Zigen's Belt</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={zigen}/>
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

export default ZigenBeltPage;
