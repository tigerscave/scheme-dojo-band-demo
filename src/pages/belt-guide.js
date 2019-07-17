import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";

const BeltGuidePage = () => {
  return (
    <div>
      <h1>Scheme Dojo Programming Belt Guides</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} isGuide={true} />
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

export default BeltGuidePage;
