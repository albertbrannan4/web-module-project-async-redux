import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateSearchValue, JobSearch } from "./actions";
import JobPostings from "./component/jobPostings";

function App(props) {
  const [occupation, setOccupation] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.updateSearchValue(occupation);
    props.JobSearch(occupation);
    setOccupation("");
  };

  return (
    <div className="App">
      <h1>Redux Job Search</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="searchInput"
          placeholder="...search here"
          value={occupation}
          onChange={(e) => {
            setOccupation(e.target.value);
          }}
          required
        />
        <input type="submit" value="search" />
      </form>
      <br />
      {props.isFetching ? (
        <h3>searching for {props.searchValue}</h3>
      ) : (
        <JobPostings />
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.searchValue,
    jobs: state.jobs,
    isFetching: state.isFetching,
  };
};
export default connect(mapStateToProps, { updateSearchValue, JobSearch })(App);
