import React, { useState } from "react";
import "../App.css";

function StackVisualizer() {
  const [stack, setStack] = useState([]);
  const [animating, setAnimating] = useState(false);
  const MAX_SIZE = 6;

  const push = () => {
    if (animating) return;
    if (stack.length >= MAX_SIZE) return alert("⚠️ Stack Tower full!");
    const value = prompt("Enter cargo value:") || Math.floor(Math.random() * 100);
    setAnimating(true);

    const newStack = [...stack, { value, anim: "in" }];
    setStack(newStack);

    setTimeout(() => {
      newStack[newStack.length - 1].anim = "";
      setStack([...newStack]);
      setAnimating(false);
    }, 800);
  };

  const pop = () => {
    if (animating) return;
    if (stack.length === 0) return alert("⚠️ Stack Underflow!");

    const newStack = [...stack];
    newStack[newStack.length - 1].anim = "out";
    setStack([...newStack]);
    setAnimating(true);

    setTimeout(() => {
      newStack.pop();
      setStack([...newStack]);
      setAnimating(false);
    }, 800);
  };

  return (
    <div className="processing-container">
      <h2>🏗️ Stack Tower (LIFO)</h2>
      <div className="control-buttons">
        <button onClick={push}>➕ Push Cargo</button>
        <button onClick={pop}>➖ Pop Cargo</button>
      </div>
      <div className="stack-pot">
        <span className="stack-label">LIFO</span>
        {stack.map((b, i) => (
          <div
            key={i}
            className={`block ${b.anim === "in" ? "flyInStack" : b.anim === "out" ? "flyOutStack" : ""}`}
            style={{
              bottom: `${i * 55 + 10}px`,
              left: "50%",
              transform: "translateX(-50%)",
              "--end-bottom": `${i * 55 + 10}px`,
            }}
          >
            {b.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StackVisualizer;
