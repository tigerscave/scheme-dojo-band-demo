import React from "react";

const SkillBlocks = ({ skills }) => (
  <div>
    <h3>Other skills</h3>
    <div className="skill-container">
      {skills.map((skillName, i) => (
        <div className="skill-content">
          <p>{skillName}</p>
        </div>
      ))}
    </div>
    <style jsx>{`
      h3 {
        margin: 1rem 1rem;
        font-size: 1.2rem;
      }
      .skill-container {
        display: flex;
      }
      .skill-content {
        border: 2px solid gray;
        width: 10rem;
        height: 3rem;
        margin: 0 1rem;
        text-align: center;
      }
      p {
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default SkillBlocks;
