import React from "react";
import "./App.css";
import StackVisualizer from "./components/StackVisualizer";
import QueueVisualizer from "./components/QueueVisualizer";

function App() {
  return (
    <div>
      <h1>💾 The Data Conveyor</h1>
      <p style={{ color: "#94a3b8" }}>
        Choose your system and process the Data Cargo Blocks.
      </p>
      <StackVisualizer />
      <QueueVisualizer />
    </div>
  );
}

export default App;
