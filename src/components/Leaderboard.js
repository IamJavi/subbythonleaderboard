import React from "react";

const Leaderboard = ({ data }) => {
  return (
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
              <td>{item.rank}</td> {/* Display the rank */}
              <td>{item.username}</td>
              <td>{item.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
