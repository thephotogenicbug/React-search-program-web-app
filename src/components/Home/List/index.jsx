import React, { useState } from "react";
import Pagination from "../../pages/Home/Pagination";
import ListItem from "../ListItem";
import SearchIcon from "@material-ui/icons/Search";
import "./styles.css";

const List = ({ list }) => {
    const [showPerPage, setShowPerPage] = useState(25);
    const [pagination, setPagination] = useState({
      start: 0,
      end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
      setPagination({ start: start, end: end });
    };

      const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="list-wrap">
      <div className="searchBar-wrap">
        <SearchIcon className="searchBar-icon" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
      />

      {list
        ?.slice(pagination.start, pagination.end)
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          else if(
            val.specialization.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
          else if(
            val.university.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val
          }
        })
        .map((item) => (
          <ListItem key={item._id} item={item} />
        ))}
    </div>
  );
};

export default List;
