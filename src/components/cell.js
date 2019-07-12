import React, { useState } from "react";
import { bandColors } from "../statics/colors";
import CellModal from "./cell-modal";

const Cell = ({ data, isPassed }) => {
  const [isModalShown, toggleModal] = useState(false);
  return (
    <div
      className="container"
      onMouseEnter={() => toggleModal(true)}
      onMouseLeave={() => toggleModal(false)}
    >
      {isPassed && isModalShown && <CellModal data={data} />}
      <p>{data.level}</p>
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
        }
        p {
          width: 100%;
          margin: auto;
        }
      `}</style>
    </div>
  );
};

export default Cell;
