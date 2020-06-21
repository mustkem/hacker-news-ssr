import React, { Component } from "react";
import { connect } from "react-redux";

import Home from "../components/Home/Home";
import { fetchUsers } from "../actions";

class HomePage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="main home-page">
        <Home />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(HomePage),
};
