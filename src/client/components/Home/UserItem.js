import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <tr>
      <td>{user.num_comments}</td>
      <td>{user.points}</td>
      <td>{<BsFillCaretUpFill className="icon upvote" />}</td>
      <td>
        <div className="details">
          <Link className="title" to="/">
            {user.title}
          </Link>
          <span className="detail-bar">
            <span className="url">({user.url})&nbsp;</span>by&nbsp;
            <Link to=""> {user.author} </Link>
            &nbsp;
            <span>{user.created_at_i} hours agoo</span>&nbsp;
            <span className="hide">[ hide ]</span>
          </span>
        </div>
      </td>
    </tr>
  );
}

export default UserItem;
