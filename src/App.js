import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./pages/top.js";
import BeltGuidePage from "./pages/belt-guide.js";
import ZigenBeltPage from "./pages/zigen-belt";
import AdaBeltPage from "./pages/ada-belt";
import RahBeltPage from "./pages/rah-belt";
import MamadouBeltPage from "./pages/mamadou-belt";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TopPage} />
      <Route path="/belt-guide" exact component={BeltGuidePage} />
      <Route path="/zigen-belt" exact component={ZigenBeltPage} />
      <Route path="/ada-belt" exact component={AdaBeltPage} />
      <Route path="/rah-belt" exact component={RahBeltPage} />
      <Route path="/mamadou-belt" exact component={MamadouBeltPage} />
    </Router>
  );
}

export default App;
