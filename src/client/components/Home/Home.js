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

      <Table striped hover>
        <thead>
          <tr>
            <th>comment</th>
            <th>vote count</th>
            <th>upvote</th>
            <th>news details</th>
          </tr>
        </thead>
        <tbody>{renderUsers()}</tbody>
      </Table>
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
