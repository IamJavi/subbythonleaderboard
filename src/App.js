import React, { useState, useEffect } from "react";
import axios from "axios";
import Leaderboard from "./components/Leaderboard";
import SearchBar from "./components/SearchBar";
import "./App.css";

const SHEET_ID = process.env.REACT_APP_SHEET_ID; // Replace with your sheet's ID
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY; // Replace with your API key
const sheetRange = "Sheet1!A:B"; // Usernames (Column A), Points (Column B)

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetRange}?key=${API_KEY}`;
      const response = await axios.get(url);
      const rows = response.data.values.slice(1); // Excludes header row
      const parsedData = rows.map(([username, points]) => ({
        username,
        points: parseInt(points),
      }));
      setData(parsedData);
    };
    fetchData();
  }, []);

  const filteredData = data
    .filter((item) =>
      item.username.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a, b) => b.points - a.points)  // Sort by points in descending order
    .map((item, index) => ({
      ...item,         // Spread the existing item properties
      rank: index + 1  // Assign a rank based on the position in the sorted array
    }));

  return (
    <div className="App">
      <h1>Puppies Leaderboard</h1>
      <SearchBar query={query} onQueryChange={setQuery} />
      <Leaderboard data={filteredData} />
    </div>
  );
}

export default App;
