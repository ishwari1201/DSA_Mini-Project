import React, { useState } from "react";

function Quiz({ addPoints }) {
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const handleQuiz = () => {
    if (answered) return alert("You already took the quiz!");
    const ans = prompt("Which data structure follows LIFO?");
    if (ans?.toLowerCase() === "stack") {
      alert("✅ Correct! +10 points");
      setScore(score + 10);
      addPoints();
    } else {
      alert("❌ Wrong! The correct answer is 'Stack'");
    }
    setAnswered(true);
  };

  return (
    <div style={{ margin: "20px" }}>
      <h2>🧩 Quick Quiz</h2>
      <button onClick={handleQuiz}>Take Quiz</button>
      <p>Quiz Score: {score}</p>
    </div>
  );
}

export default Quiz;
