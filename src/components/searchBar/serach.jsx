import React, { useState } from "react";
import "./serach.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handelSerach = () => {
    onSearch(query);
  };

  return (
    <div className="main">
      <label className="leb">Enter your Favorite racipe:</label>
      <div className="main2">
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="serach your racipe"
          className="inputfield"
        />
        <button className="btn" onClick={handelSerach}>
          Serach
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
