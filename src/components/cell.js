import React from 'react';

const Cell = ({data}) => (
  <div className="container">
    <p>{data.level}</p>
    <style jsx="true">{`
      div.container {
        display: flex;
        flex-direction: column-reverse;
        border: 1px solid gray;
      }
    `}</style>
  </div>
);

export default Cell;