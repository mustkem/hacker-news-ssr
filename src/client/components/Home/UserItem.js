import React from "react";
import { BsFillCaretUpFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import extractDomain from "extract-domain";

export const UserItem = ({ user, upvotePost, hideUser }) => {
  return (
    <li>
      <div className="tile">
        <span className="bar">{user.num_comments || 0}</span>
        <span className="bar">{user.points}</span>
        <span className="bar">
          {
            <BsFillCaretUpFill
              onClick={() => upvotePost(user.objectID)}
              className="icon upvote"
            />
          }
        </span>
      </div>
      <div className="desc-tile">
        <a target="_blank" className="title" href={user.url}>
          {user.title || "Na"}
        </a>
        <span className="detail-bar">
          {user.url && (
            <React.Fragment>
              (
              <span title={user.url} className="url">
                {extractDomain(user.url)}
              </span>
              )
            </React.Fragment>
          )}
          &nbsp;by&nbsp;
          <Link to=""> {user.author} </Link>
          &nbsp;
          <span>
            {user.created_at_i && new Date(user.created_at_i).getHours()} hours
            ago{" "}
          </span>
          &nbsp;
          <button onClick={() => hideUser(user.objectID)} className="hide">
            [ hide ]
          </button>
        </span>
      </div>
    </li>
  );
};

export default UserItem;
