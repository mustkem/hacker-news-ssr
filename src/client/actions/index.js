import { stringify } from "query-string";

export const FETCH_USERS = "FETCH_USERS";
export const UPVOTE_POST = "UPVOTE_POST";
export const HIDE_USER = "HIDE_USER";
export const QUERY_ON_SERVER_SIDE = "QUERY_ON_SERVER_SIDE";

export const fetchUsers = (query) => async (dispatch, getState, api) => {
  if (!query.page) {
    query.page = 1;
  }
  const res = await api.get("/search?" + stringify(query));
  dispatch({
    type: FETCH_USERS,
    payload: res.data,
  });
};
export const upvotePost = (id) => async (dispatch, getState, api) => {
  // call api here and dispatch below action in succes of api call.
  dispatch({
    type: UPVOTE_POST,
    payload: id,
  });
};

export const hideUser = (id) => async (dispatch, getState, api) => {
  //call api to hide user from users view // make api call here //
  //const res = await api.delete("/userid");

  dispatch({
    type: HIDE_USER,
    payload: id,
  });
};

export const queryOnServerSide = (query) => async (dispatch, getState) => {
  //dispatch query for serverside //
  dispatch({
    type: QUERY_ON_SERVER_SIDE,
    payload: query,
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
