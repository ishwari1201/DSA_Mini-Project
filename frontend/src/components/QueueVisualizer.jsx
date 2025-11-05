import React, { useState } from "react";
import "../App.css";

function QueueVisualizer() {
  const [queue, setQueue] = useState([]);
  const [animating, setAnimating] = useState(false);
  const MAX_SIZE = 6;
  const saveToDB = async (value) => {
    try {
      const res = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: "QueueUser", score: value }),
      });
      const data = await res.json();
      console.log("Saved to DB:", data);
    } catch (err) {
      console.error(err);
    }
  };

  const enqueue = () => {
    if (animating) return;
    if (queue.length >= MAX_SIZE) return alert("⚠️ Queue Line full!");
    const value = prompt("Enter cargo value:") || Math.floor(Math.random() * 100);

    setAnimating(true);
    const newQueue = [...queue, { value, anim: "in" }];
    setQueue(newQueue);
 saveToDB(value);
    setTimeout(() => {
      newQueue[newQueue.length - 1].anim = "";
      setQueue([...newQueue]);
      setAnimating(false);
    }, 700);
  };

  const dequeue = () => {
    if (animating) return;
    if (queue.length === 0) return alert("⚠️ Queue Underflow!");

    const newQueue = [...queue];
    newQueue[0].anim = "out";
    setQueue([...newQueue]);
    setAnimating(true);

    setTimeout(() => {
      newQueue.shift();
      setQueue([...newQueue]);
      setAnimating(false);
    }, 700);
  };

  return (
    <div className="processing-container">
      <h2>🚚 Queue Line (FIFO)</h2>
      <div className="control-buttons">
        <button onClick={enqueue}>➕ Enqueue Cargo</button>
        <button onClick={dequeue}>➖ Dequeue Cargo</button>
      </div>
      <div className="queue-container">
        <span className="queue-label-front"></span>
        <span className="queue-label-back"></span>
        {queue.map((b, i) => (
          <div
            key={i}
            className={`block ${b.anim === "in" ? "slideInQueue" : b.anim === "out" ? "flyOutQueue" : ""}`}
            style={{
              left: `${10 + i * 70}px`,
              "--end-left": `${10 + i * 70}px`,
            }}
          >
            {b.value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QueueVisualizer;
