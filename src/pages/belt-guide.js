import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Cell from "../components/cell";

const Hoge = ({ data }) => (
  <div className="container">
    <div className="cells">
      {data.levels.map((d, i) => (
        <Cell data={d} key={i} />
      ))}
    </div>
    <p>{data.name}</p>
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

const BeltGuidePage = () => {
  return (
    <div>
      <h1>Scheme Dojo Belt Guides</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Hoge data={d} key={i} />
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
