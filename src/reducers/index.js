import {
  UPDATE_SEARCH_VALUE,
  GET_JOBS_SUCCESS,
  SET_IS_FETCHING,
} from "../actions";

const initialState = {
  jobs: [],
  searchValue: "",
  isFetching: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case GET_JOBS_SUCCESS:
      return { ...state, jobs: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
};

export default reducer;
