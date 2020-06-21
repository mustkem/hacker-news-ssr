import React from "react";
import { connect } from "react-redux";

import { Helmet } from "react-helmet";
import homeCss from "../../../css/home.css";
import Table from "react-bootstrap/Table";

import UserItem from "./UserItem";

const Home = (props) => {
  function renderUsers() {
    return (
      props.users &&
      props.users.hits &&
      props.users.hits.map((user) => {
        return <UserItem key={user.objectID} user={user} />;
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
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Home);
