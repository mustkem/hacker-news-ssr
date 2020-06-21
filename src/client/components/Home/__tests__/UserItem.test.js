import React from "react";
import { UserItem } from "../UserItem";
import "babel-polyfill";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Link } from "react-router-dom";

import { upvotePost, hideUser } from "../../../actions/index";

configure({ adapter: new Adapter() });

const props = {
  upvotePost,
  hideUser,
  user: {
    author: "pfg",
    comment_text: null,
    created_at: "2017-02-23T13:01:08.000Z",
    created_at_i: 1487854868,
    num_comments: 485,
    objectID: "13713480",
    parent_id: null,
    points: 3030,
    relevancy_score: 7272,
    story_id: null,
    story_text: null,
    story_title: null,
    story_url: null,
    title: "Announcing the first SHA-1 collision",
    url:
      "https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html",
  },
};

describe("<UserItem />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UserItem {...props} />);
  });

  it("Should fire a click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<button onClick={mockCallBack}>Ok!</button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("should render Link component successfully", () => {
    expect(wrapper.find(Link)).toHaveLength(1);
  });
});
