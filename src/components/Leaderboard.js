import React from "react";
import "../App.css"// Use your existing CSS file

const Leaderboard = ({ data }) => {
  return (
    <div className="leaderboard-container">
      <div className="leaderboard">
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Username</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.username}>
                <td>{item.rank}</td>
                <td>{item.username}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="image-container">

      </div>
    </div>
  );
};

export default Leaderboard;
