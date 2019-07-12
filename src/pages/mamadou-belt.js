import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { mamadou } from "../statics/userScores";
import mamadouImg from "../assets/images/mamadou.png";

const MamadouBeltPage = () => {
  return (
    <div>
      <div className="profile">
        <img src={mamadouImg} alt="mamadouImg" />
        <h1>Mamadou's Belt</h1>
      </div>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={mamadou} />
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

export default MamadouBeltPage;
