import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <style jsx>{`
        .App {
          text-align: center;
        }
        .App-header {
          background-color: #282c34;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: calc(10px + 2vmin);
          color: white;
        }
        .App-logo {
          animation: App-logo-spin infinite 20s linear;
          height: 40vmin;
          pointer-events: none;
        }
        .App-link {
          color: #61dafb;
        }
      `}</style>
    </div>
  );
}

export default App;
