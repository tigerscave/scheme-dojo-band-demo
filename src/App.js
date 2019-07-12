import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./pages/top.js";
import BeltGuidePage from "./pages/belt-guide.js";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TopPage} />
      <Route path="/belt-guide" exact component={BeltGuidePage} />
    </Router>
  );
}

export default App;
