import React from "react";
import { bandColors } from "../statics/colors";

const Cell = ({ data }) => (
  <div className="container">
    <p>{data.level}</p>
    <style jsx="true">{`
      div.container {
        display: flex;
        border: 1px solid gray;
        width: 6rem;
        height: 2.5rem;
        text-align: center;
        background-color: ${bandColors[data.level]};
      }
      p {
        width: 100%;
        margin: auto;
      }
    `}</style>
  </div>
);

export default Cell;
