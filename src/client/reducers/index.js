import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import globalReducer from "./globalReducer";

export default combineReducers({
  users: usersReducer,
  global: globalReducer,
});
