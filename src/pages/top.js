import React from "react";
import { Link } from "react-router-dom";
import karateImg from "../assets/images/karate.jpg";

const TopPage = () => (
  <div className="container">
    <h1>Scheme Dojo</h1>
    <div className="content">
      <ul>
        <li>
          <Link to="belt-guide">Scheme Dojo Belt Guide</Link>
        </li>
        <li>
          <Link to="zigen-belt">Zigen's belt status</Link>
        </li>
        <li>
          <Link to="ada-belt">Adaniya's belt status</Link>
        </li>
        <li>
          <Link to="rah-belt">Rahmat's belt status</Link>
        </li>
        <li>
          <Link to="mamadou-belt">Mamadou's belt status</Link>
        </li>
      </ul>
      <img src={karateImg} alt="karateImg" />
    </div>
    <style jsx="true">{`
      div.container {
        margin: 0 2rem;
      }
      div.content {
        display: flex;
      }
      li {
        margin: 1rem 0;
      }
      img {
        margin-top: 1.5rem;
        margin-left: 5rem;
        width: 10rem;
        height: 10rem;
      }
    `}</style>
  </div>
);

export default TopPage;
