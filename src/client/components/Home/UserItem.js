import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const UserItem = ({ user, upvotePost, hideUser }) => {
  return (
    <li>
      <span>{user.num_comments || 0}</span>
      <span>{user.points}</span>
      <a>
        {
          <BsFillCaretUpFill
            onClick={() => upvotePost(user.objectID)}
            className="icon upvote"
          />
        }
      </a>
      <button onClick={() => hideUser(user.objectID)} className="hide">
        [ hide ]
      </button>
      {/* <td>
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
          </span>
        </div>
      </td> */}
    </li>
  );
};

export default UserItem;
