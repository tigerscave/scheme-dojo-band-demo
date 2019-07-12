import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { mamadou } from "../statics/userScores";

const MamadouBeltPage = () => {
  return (
    <div>
      <h1>Mamadou's Belt</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={mamadou}/>
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

export default MamadouBeltPage;
