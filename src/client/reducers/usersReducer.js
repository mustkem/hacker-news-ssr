import { FETCH_USERS, UPVOTE_POST, HIDE_USER } from "../actions";
import { Map, fromJS } from "immutable";

function upvotePost(state, action) {
  const newState = state.toJS();
  newState.hits.forEach((item) => {
    if (action.payload === item.objectID) item.points = ++item.points;
  });
  return fromJS(newState);
}

function getUsers(state, action) {
  return fromJS(action.payload);
}

function hideUser(state, action) {
  const newState = state.toJS();
  newState.hits = newState.hits.filter(
    (item) => action.payload !== item.objectID
  );
  return fromJS(newState);
}

export default (state = Map({}), action) => {
  switch (action.type) {
    case FETCH_USERS:
      return getUsers(state, action);
    case UPVOTE_POST:
      return upvotePost(state, action);
    case HIDE_USER:
      return hideUser(state, action);
    default:
      return fromJS(state);
  }
};
