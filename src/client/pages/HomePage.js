import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { parse } from "query-string";

import Home from "../components/Home/Home";
import { fetchUsers, queryOnServerSide } from "../actions";

class HomePage extends Component {
  componentDidMount() {
    const query = parse(this.props.location.search);
    this.props.queryOnServerSide({ serverQuery: query });
    this.props.fetchUsers(parse(this.props.location.search));
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

function loadData(store, req) {
  store.dispatch(queryOnServerSide({ serverQuery: req.query }));
  return store.dispatch(fetchUsers(req.query));
}

export default {
  loadData,
  component: withRouter(
    connect(mapStateToProps, { fetchUsers, queryOnServerSide })(HomePage)
  ),
};
