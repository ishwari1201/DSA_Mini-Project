import React from "react";

function Dashboard({ points }) {
  return (
    <div style={{ margin: "20px" }}>
      <h2>📊 Dashboard</h2>
      <p>Your total learning XP: <strong>{points}</strong></p>
    </div>
  );
}

export default Dashboard;
