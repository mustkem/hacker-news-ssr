export const FETCH_USERS = "FETCH_USERS";
export const UPVOTE_POST = "UPVOTE_POST";
export const HIDE_USER = "HIDE_USER";

export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get("/search");
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

export const FETCH_CURRENT_USER = "fetch_current_user";
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get("/current_user");

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};
