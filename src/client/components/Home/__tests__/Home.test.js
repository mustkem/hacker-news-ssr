import React from "react";
import { Home } from "../Home";
import { Helmet } from "react-helmet";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { upvotePost, hideUser, fetchUsers } from "../../../actions/index";

import Pagination from "../Pagination";

configure({ adapter: new Adapter() });

const props = {
  upvotePost,
  hideUser,
  fetchUsers,
};

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it("should render Home component successfully and should add meta and style", () => {
    expect(wrapper.find(Helmet)).toHaveLength(1);
  });

  it("should render pagination component successfully", () => {
    expect(wrapper.find(Pagination)).toHaveLength(1);
  });

  it("should have container in it", () => {
    wrapper.props().className.to.equal("container");
  });
});
