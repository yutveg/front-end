import axiosWithAuth from "../utils/axiosWithAuth";

export const retrieveWorkoutData = userID => dispatch => {
  dispatch({ type: RETRIEVE_WORKOUTS });
  axiosWithAuth()
    .get(`/users/${userid}/journal`)
    .then(res => {
      dispatch({ type: RETRIEVE_WORKOUTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: RETRIEVE_WORKOUTS_FAILED, payload: err.message });
    });
};

export const retrieveDashBoardData = userID => dispatch => {
  dispatch({ type: RETRIEVE_USERINFO });
  axiosWithAuth()
    .get(`/users/${userid}/info`)
    .then(res => {
      dispatch({ type: RETRIEVE_USERINFO_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: RETRIEVE_USERINFO_FAILED, payload: err.message });
    });
};
