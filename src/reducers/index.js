import { UPDATE_SEARCH_VALUE } from "../actions";

const initialState = {
  job: {
    employer_name: "LHH",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXvP3TTL8ktw0C4yOpN5EQw1u_R3XWk5bgV4Iv&s=0",
    employer_website: null,
    job_publisher: "LinkedIn",
    job_id: "dMkZjjxqfgYAAAAAAAAAAA==",
    job_employment_type: "FULLTIME",
    job_title: "Frontend Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/frontend-developer-at-lhh-3467085871",
    job_description:
      "Our client in healthcare is seeking a fully remote Frontend Developer to architect, prototype, build and test new features and functionality for ecommerce platforms. You will implement new features and intuitive user experiences that interact with backend APIs and services.\n\nStart-up environment AND Healthcare industry experience is required (You will be expected to meet code, source control, and documentation standards as required by health care industry law.)\n\nQualifications:\n\n·In-depth knowledge of HTML, CSS, JavaScript and modern JavaScript frameworks and libraries (Next.js / React / Redux)\n\n·Know how to craft effective unit and integration test suites for JavaScript and React codebases, using Jest or similar\n\n·A keen eye for UI/UX and high visual standards\n\n·You have a passion for learning and always improving yourself and the team around you\n\n·Start-up and healthcare industry experience\n\n·Experience with GraphQL or Headless Ecommerce is a bonus!\n\nCompensation: Targeting $130-150k/yr USD + full comprehensive benefits (including stock, $10/day lunch stipend, unlimited PTO!)\n\nPlease apply for immediate consideration and follow up call if qualified!\n\nThis opportunity is only available for US Citizens/GC Holders, and not on C2C.",
    job_is_remote: true,
  },
  searchValue: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    default:
      return state;
  }
};

export default reducer;
