import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";

const Searchbar = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <SearchIcon className="searchBar-icon" />
      <input
        type="text"
        placeholder="Search for Course | University | Colleges"
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default Searchbar;
