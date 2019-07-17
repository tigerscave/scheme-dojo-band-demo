import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Levels from "../components/levels";
import { rah, rahSkills } from "../statics/userScores";
import rahImg from "../assets/images/rah.jpg";
import SkillBlocks from "../components/skill-blocks";

const RahBeltPage = () => {
  return (
    <div>
      <div className="profile">
        <img src={rahImg} alt="rahImg" />
        <h1>Rahmat's Belt</h1>
      </div>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Levels data={d} key={i} user={rah} />
        ))}
      </div>
      <div>
        <SkillBlocks skills={rahSkills} />
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

export default RahBeltPage;
