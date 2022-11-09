export default (state, action) => {
  switch (action.type) {
    case "ADD_JOB":
      return {
        ...state,
        jobs: [action.payload, ...state.jobs],
      };

    default:
      return state;
  }
};
