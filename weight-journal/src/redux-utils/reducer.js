const initialState = {
  workouts: [],
  userInfo: [],
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_WORKOUTS:
      return {
        ...state,
        isFetching: true
      };
    case RETRIEVE_WORKOUTS_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
        isFetching: false
      };
    case RETRIEVE_WORKOUTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case RETRIEVE_USERINFO:
      return {
        ...state,
        isFetching: true
      };
    case RETRIEVE_USERINFO_SUCCESS:
      return {
        ...state,
        workouts: action.payload,
        isFetching: false
      };
    case RETRIEVE_USERINFO_FAILED:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  }
};
