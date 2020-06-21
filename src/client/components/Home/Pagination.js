import React, { useState } from "react";
import { stringify, parse } from "query-string";
import { useLocation, useHistory } from "react-router-dom";

export const Pagination = (props) => {
  let location = useLocation();
  let history = useHistory();
  const [page, setPage] = useState(() => {
    return props.serverQuery.page && parseInt(props.serverQuery.page);
  });

  function handlePagination(dir) {
    window.scrollTo(0, 0);
    const query = parse(location.search);
    if (!query.page) {
      query.page = 2; // if page is not present in query it means we were showing first page //
    } else {
      query.page = parseInt(query.page) + 1 * dir;
    }
    const url = `/?${stringify(query)}`;
    history.push(url);
    props.fetchUsers(query);
    setPage(parseInt(query.page));
  }

  return (
    <div className="pagination-wrap">
      <div className="pagination">
        <button
          disabled={!page || page === 1 ? "disabled" : ""}
          onClick={() => handlePagination(-1)}
          className="previous"
        >
          Previous
        </button>
        <button onClick={() => handlePagination(1)}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
