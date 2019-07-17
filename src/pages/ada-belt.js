import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { ada, adaSkills } from "../statics/userScores";
import adaImg from "../assets/images/ada.jpg";
import SkillBlocks from "../components/skill-blocks";

const AdaBeltPage = () => {
  return (
    <div>
      <div className="profile">
        <img src={adaImg} alt="adaImg" />
        <h1>Adaniya's Belt</h1>
      </div>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={ada} />
        ))}
      </div>
      <div>
        <SkillBlocks skills={adaSkills} />
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

export default AdaBeltPage;
