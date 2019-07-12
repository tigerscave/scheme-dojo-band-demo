import React from "react";
import programmingClassification from "../statics/programmingClassification";
import Cell from "../components/cell";

const Hoge = ({data}) => (
  <div className="container">
    <p>{data.name}</p>
    {data.levels.map((d, i) => (
      <Cell data={d} key={i} />
    ))}
    <style jsx="true">{`
      div.container {
        margin: 0 2rem;
      }
    `}</style>
  </div>
);

const BeltGuidePage = () => {
  console.log(programmingClassification)
  return (
    <div>
      <h1>Belt Guides</h1>
      <div className="content">
        {programmingClassification.map((d, i) => (
          <Hoge data={d} key={i}/>
        ))}
      </div>
      <style jsx>{`
        div.content {
          display: flex;
        }
      `}</style>
    </div>
  );
}

export default BeltGuidePage;