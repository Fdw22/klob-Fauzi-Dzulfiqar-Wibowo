import "../App.css";
import React, { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
// import { JobContext } from "../App";

// import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const MySwal = withReactContent(Swal);

export default function FormAdd() {
  useEffect(() => {
    document.title =
      "Buat Lowongan Pekerjaan | Klob Skill Test | Fauzi Dzulfiqar Wibowo";
  });
  // const [startDate, setStartDate] = useState(new Date());
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
  }, []);

  const [Logo, setLogo] = useState("");

  function submit(e) {
    e.preventDefault();

    console.log("clicked!");
    console.log("Logo = ", Logo);
    MySwal.fire({
      icon: "warning",
      title: "Apakah Data Sudah Sesuai ?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sesuai",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Data Berhasil di submit!",
        });
      }
    });
  }

  return (
    <div className="container px-2 pt-10 mb-5 bg-white mx-auto">
      <p className="text-black text-2xl md:text-[36px] font-bold text-center">
        Buat Lowongan :
      </p>
      <div className=" mx-auto pt-10">
        <form class="w-full max-w-lg mx-auto">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor=""
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Logo Perusahaan
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                placeholder="Ketikan Logo Perusahaan"
                onChange={(e) => setLogo(e.target.value)}
                value={Logo}
              />
              <span className="text-xs">Dalam bentuk link url</span>
            </div>

            <div className="w-full px-3 mt-3">
              <label
                htmlFor=""
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Nama Perusahaan
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                placeholder="Ketikan Nama Perusahaan"
              />
            </div>

            <div className="w-full px-3 mt-3">
              <label
                htmlFor=""
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Nama Lowongan
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                placeholder="Ketikan Nama Lowongan"
              />
            </div>

            <div className="w-full px-3 mt-3">
              <label
                htmlFor=""
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Status Karyawan
              </label>
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                placeholder="Ketikan Status Karyawan"
              />
            </div>
          </div>

          <label
            class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
            for=""
          >
            Kisaran Gaji Karyawan
          </label>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                for=""
              >
                Dari
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id=""
                type="number"
                placeholder="1.000.000"
              />
              {/* <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                for=""
              >
                Sampai
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id=""
                type="number"
                placeholder="10.000.000"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                htmlFor=""
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Tanggal Posting
              </label>
              {/* <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                id="datepicker"
              /> */}
              <input
                type="text"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white"
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={submit}
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
