import React from "react";
import Cell from "../components/cell";

const Levels = ({ data, user }) => (
  <div className="container">
    <div className="cells">
      {data.levels.map((d, i) => (
        <Cell data={d} key={i} isPassed={d.level <= user[data.name]} />
      ))}
    </div>
    <h3>{data.name}</h3>
    <style jsx="true">{`
      div.container {
        margin: 0 1rem;
        text-align: center;
      }
      div.cells {
        display: flex;
        flex-direction: column-reverse;
      }
    `}</style>
  </div>
);

Levels.defaultProps = {
  user: {
    Scheme: 7,
    HTML: 7,
    CSS: 7,
    JavaScript: 7,
    Git: 7
  }
}

export default Levels;