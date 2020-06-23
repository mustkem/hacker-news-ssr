import React from "react";
import { connect } from "react-redux";

import { Helmet } from "react-helmet";
import homeCss from "../../../css/home.css";
import Table from "react-bootstrap/Table";

import UserItem from "./UserItem";
import { upvotePost, hideUser, fetchUsers } from "../../actions/index";
import Pagination from "./Pagination";

export const Home = (props) => {
  function renderUsers() {
    return (
      props.hits &&
      props.hits.map((user) => {
        return (
          <UserItem
            key={user.objectID}
            user={user}
            upvotePost={props.upvotePost}
            hideUser={props.hideUser}
          />
        );
      })
    );
  }

  function head() {
    return (
      <Helmet>
        <title>Users Loaded</title>
        <meta property="og:title" content="Hacker App" />
        <style>{homeCss}</style>
      </Helmet>
    );
  }

  return (
    <div className="container">
      {head()}

      <ul className="user-list">
        <li className="list-head">
          <span className="bar">comment</span>
          <span className="bar">vote count</span>
          <span className="bar">upvote</span>
          <span className="bar">news details</span>
        </li>
        {/* <tbody></tbody> */}
        {renderUsers()}
      </ul>
      <Pagination
        fetchUsers={props.fetchUsers}
        serverQuery={props.serverQuery}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = state.users.toJS();
  const globalData = state.global.toJS();
  return {
    hits: data.hits,
    serverQuery: globalData.serverQuery,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    upvotePost: (id) => dispatch(upvotePost(id)),
    hideUser: (id) => dispatch(hideUser(id)),
    fetchUsers: (query) => dispatch(fetchUsers(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
