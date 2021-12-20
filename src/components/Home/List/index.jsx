import React, { useState } from "react";
import Pagination from "../../pages/Home/Pagination";
import ListItem from "../ListItem";
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

  return (
    <div className="list-wrap">
       <Pagination
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
        />
      <div className="pagination">
       
      </div>
      {list?.slice(pagination.start, pagination.end).map((item) => (
        <ListItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default List;
