import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const UserItem = ({ user, upvotePost, hideUser }) => {
  return (
    <tr>
      <td>{user.num_comments || 0}</td>
      <td>{user.points}</td>
      <td>
        {
          <BsFillCaretUpFill
            onClick={() => upvotePost(user.objectID)}
            className="icon upvote"
          />
        }
      </td>
      <td>
        <div className="details">
          <a target="_blank" className="title" href={user.url}>
            {user.title || "Na"}
          </a>
          <span className="detail-bar">
            {user.url && (
              <React.Fragment>
                (<span className="url">{user.url}</span>)
              </React.Fragment>
            )}
            &nbsp;by&nbsp;
            <Link to=""> {user.author} </Link>
            &nbsp;
            <span>{user.created_at_i} hours agoo</span>&nbsp;
            <button onClick={() => hideUser(user.objectID)} className="hide">
              [ hide ]
            </button>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default UserItem;
