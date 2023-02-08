import axios from "axios";

export const UPDATE_SEARCH_VALUE = "UPDATE_SEARCH_VALUE";

export const updateSearchValue = (searchInput) => {
  return { type: UPDATE_SEARCH_VALUE, payload: searchInput };
};

// export const JobSearch = (search) => {
//   console.log(search);
//   const options = {
//     method: "GET",
//     url: "https://jsearch.p.rapidapi.com/search",
//     params: { query: `${search}`, num_pages: "1" },
//     headers: {
//       "X-RapidAPI-Key": "023207c256msh41bd9a165c606c8p1b9c09jsn29c80b6f2916",
//       "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
//     },
//   };
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data.data[0]);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// };
