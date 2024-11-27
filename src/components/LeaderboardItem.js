import React from "react";

function LeaderboardItem({ username, points }) {
  return (
    <div className="leaderboard-item">
      <span>{username}</span>
      <span>{points}</span>
    </div>
  );
}

export default LeaderboardItem;