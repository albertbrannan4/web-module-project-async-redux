import axios from "axios";

export const UPDATE_SEARCH_VALUE = "UPDATE_SEARCH_VALUE";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
export const updateSearchValue = (searchInput) => {
  return { type: UPDATE_SEARCH_VALUE, payload: searchInput };
};

export const JobSearch = (search) => (dispatch) => {
  console.log(search);
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: { query: `${search}`, num_pages: "1" },
    headers: {
      "X-RapidAPI-Key": "023207c256msh41bd9a165c606c8p1b9c09jsn29c80b6f2916",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      let jobs = response.data.data;
      // console.log(jobs);
      dispatch(getJobsSuccess(jobs));
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getJobsSuccess = (jobs) => {
  return { type: GET_JOBS_SUCCESS, payload: jobs };
};
