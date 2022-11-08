import "../App.css";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Card from "../components/Card";
import { JobContext } from "../App";

export default function Home() {
  useEffect(() => {
    document.title = "Home | Klob Skill Test | Fauzi Dzulfiqar Wibowo";
  });
  const MySwal = withReactContent(Swal);

  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("https://test-server-klob.herokuapp.com/fakeJob")
      .then((response) => response.json())
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: "Code Error : #URLGET1",
        });
      });
  });

  return (
    <JobContext.Provider value={jobs}>
      <div className="container mx-auto px-2 pt-10 mb-5">
        <p className="text-black text-2xl md:text-[36px] font-bold text-center">
          Lowongan Pekerjaan:
        </p>
        <Card />
      </div>
    </JobContext.Provider>
  );
}
