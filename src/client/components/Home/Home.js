import React from "react";
import { connect } from "react-redux";

import { Helmet } from "react-helmet";
import homeCss from "../../../css/home.css";
import Table from "react-bootstrap/Table";

import UserItem from "./UserItem";
import { upvotePost, hideUser } from "../../actions/index";

const Home = (props) => {
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
      <div className="pagination-wrap">
        <div className="pagination">
          <button className="previous">Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const data = state.users.toJS();
  return {
    hits: data.hits,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    upvotePost: (id) => dispatch(upvotePost(id)),
    hideUser: (id) => dispatch(hideUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
