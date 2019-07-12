import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopPage from "./pages/top.js";

function App() {
  return (
    <Router>
      <Route path="/" exact component={TopPage} />
    </Router>
  );
}

export default App;
