import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { ada } from "../statics/userScores";

const AdaBeltPage = () => {
  return (
    <div>
      <h1>Adaniya's Belt</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={ada}/>
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

export default AdaBeltPage;
