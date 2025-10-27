import React from "react";

function BadgeSystem({ points }) {
  let badge = "🎓 Beginner Operator";
  if (points >= 30) badge = "🏅 Skilled Handler";
  if (points >= 60) badge = "🥇 Master of Data Flow";

  return (
    <div style={{
      backgroundColor: "#1e293b",
      color: "#f1f5f9",
      padding: "15px",
      borderRadius: "10px",
      margin: "30px auto",
      width: "300px",
      boxShadow: "0 0 15px rgba(52,211,153,0.3)"
    }}>
      <h3>Your Badge: {badge}</h3>
      <progress value={points} max="60" style={{ width: "100%" }}></progress>
    </div>
  );
}

export default BadgeSystem;
