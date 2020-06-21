import { QUERY_ON_SERVER_SIDE } from "../actions";
import { Map, fromJS } from "immutable";

export default (state = Map({}), action) => {
  switch (action.type) {
    case QUERY_ON_SERVER_SIDE:
      return fromJS(action.payload);
    default:
      return fromJS(state);
  }
};
