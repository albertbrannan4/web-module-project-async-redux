import React from "react";
const JobCard = (props) => {
  const { each } = props;
  return (
    <div className="card">
      <div className="header">
        {each.employer_logo != undefined && <img src={each.employer_logo} />}
        <p>
          {each.job_employment_type}: {each.job_title}
        </p>
      </div>
    </div>
  );
};

export default JobCard;
