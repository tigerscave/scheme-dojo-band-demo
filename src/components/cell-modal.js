import React from "react";

const beltColor = {
  1: "White",
  2: "Yellow",
  3: "Orange",
  4: "Blue",
  5: "Green",
  6: "Red",
  7: "Black"
}

const CellModal = ({data}) => (
  <div className="modal-container">
    <p>Level: {data.level}</p>
    <p>Belt Color: {beltColor[data.level]}</p>
    <p>Exam: {data.exam}</p>
    <p>Description: {data.description}</p>
    <style jsx>{`
      div.modal-container {
        width: 32rem;
        height: 7rem;
        position: absolute;
        top: 1rem;
        left: 2rem;
        border: 1px dotted gray;
        background-color: rgba(255, 255, 255, 0.9);
        z-index: 10;
        text-align: left;
      }
      p {
        margin: 0.5rem;
      }
    `}</style>
  </div>
);

export default CellModal;