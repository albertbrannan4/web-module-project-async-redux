import React from "react";
import { connect } from "react-redux";
import "../App.css";
import JobCard from "./JobCard";
const JobPostings = (props) => {
  return (
    <div className="cards">
      {props.jobs.map((each, idx) => {
        return <JobCard each={each} key={each.job_id} />;
      })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { jobs: state.jobs };
};
export default connect(mapStateToProps, {})(JobPostings);
