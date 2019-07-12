import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { zigen } from "../statics/userScores";
import zigenImg from "../assets/images/zigen.jpg";

const ZigenBeltPage = () => {
  return (
    <div>
      <div className="profile">
        <img src={zigenImg} alt="zigenImg" />
        <h1>Zigen's Belt</h1>
      </div>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={zigen} />
        ))}
      </div>
      <style jsx>{`
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

export default ZigenBeltPage;
