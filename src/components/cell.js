import React, { useState } from "react";
import { bandColors } from "../statics/colors";
import CellModal from "./cell-modal";
import starImg from "../assets/images/star.png";

const Cell = ({ data, isPassed, isGuide }) => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div
      className="container"
      onMouseEnter={() => toggleModal(true)}
      onMouseLeave={() => toggleModal(false)}
    >
      {isPassed && isModalShown && <CellModal data={data} />}
      <p>{data.level}</p>
      {!isGuide && isPassed && <img src={starImg} alt="starImg" />}
      <style jsx="true">{`
        div.container {
          display: flex;
          border: 1px solid gray;
          width: 10rem;
          height: 3rem;
          text-align: center;
          background-color: ${bandColors[data.level]};
          position: relative;
          opacity: ${isPassed ? 1 : 0.5};
          position: relative;
        }
        p {
          width: 100%;
          margin: auto;
        }
        img {
          width: 30%;
          height: 60%;
          position: absolute;
          top: 0;
          right: -1rem;
        }
      `}</style>
    </div>
  );
};

export default Cell;
