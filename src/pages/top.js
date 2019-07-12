import React from "react";
import { Link } from "react-router-dom";

const TopPage = () => (
  <div>
    <h1>Scheme Dojo</h1>
    <ul>
      <li>
        <Link to="/belt-guide">Scheme Dojo Belt Guide</Link>
      </li>
    </ul>
  </div>
);

export default TopPage;
