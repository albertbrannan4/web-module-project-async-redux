import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { updateSearchValue } from "./actions";
function App(props) {
  const [occupation, setOccupation] = useState("");
  const submit = (e) => {
    e.preventDefault();
    props.updateSearchValue(occupation);
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
      <div>
        {props.searchValue != "" && <p>You Searched: {props.searchValue}</p>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { searchValue: state.searchValue };
};
export default connect(mapStateToProps, { updateSearchValue })(App);
