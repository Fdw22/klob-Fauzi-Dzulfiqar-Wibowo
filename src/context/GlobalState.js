import React, { createContext, useReducer, useEffect, useState } from "react";
import AppReducer from "./AppReducer";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchUser = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch("https://test-server-klob.herokuapp.com/fakeJob")
        .then((response) => response.json())
        .then((result) => setJobs(result))
        .catch((error) => console.log("An error occured"));
    };

    fetchUser();
  }, []);
  const [state, dispatch] = useReducer(AppReducer, jobs);
  const addJob = (job) => {
    dispatch({
      type: "ADD_JOB",
      payload: job,
    });
  };

  return (
    <GlobalContext.Provider value={[jobs, setJobs]}>
      {children}
    </GlobalContext.Provider>
  );
};
