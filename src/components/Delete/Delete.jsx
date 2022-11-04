import axios from "axios";
import React, { useState } from "react";

const Delete = () => {
  const [id, setId] = useState(0);
  const [msgClass, setMsgClass] = useState("hidden");
  const [msg, setMsg] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const deleteTransaction = async (id) => {
    const res = await axios.delete(`${baseUrl}/${id}`).catch(() => {
      setMsg("Something is wrong!");
      setMsgClass(
        "absolute max-w-max right-[43%] p-4 alert alert-error text-white shadow-lg animate-in slide-in-from-top top-8 duration-500"
      );
      setTimeout(() => {
        setMsgClass(
          "absolute max-w-max right-[43%] p-4 alert alert-error text-white shadow-lg top-8 duration-500 animate-out slide-out-to-top"
        );
      }, 600);

      setTimeout(() => {
        setMsgClass("hidden");
      }, 1000);
    });
    if (res.status === 200) {
      setMsg("Your transition deleted successful!");
      setMsgClass(
        "absolute max-w-max right-[39%] p-4 alert alert-success text-white shadow-lg animate-in slide-in-from-top top-8 duration-500"
      );
      setTimeout(() => {
        setMsgClass(
          "absolute max-w-max right-[39%] p-4 alert alert-success text-white shadow-lg top-8 duration-500 animate-out slide-out-to-top"
        );
      }, 600);

      setTimeout(() => {
        setMsgClass("hidden");
      }, 900);
      setId(0);
    }
  };
  return (
    <div className="w-full mx-auto max-w-7xl p-10  bg-white shadow-2xl rounded-lg transition-all">
      <div className={msgClass}>
        <div className=" mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{msg}</span>
        </div>
      </div>
      <h1 className="text-center text-4xl font-black mb-8">Post Transaction</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 ml-auto max-w-5xl gap-4 p-4 rounded-md ">
        <div className="form-control">
          <label className="input-group">
            <span>Transaction Id *</span>
            <input
              type="input"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Transaction Id"
              className="input input-bordered  w-full lg:w-auto"
              required
            />
          </label>
        </div>
        <button
          className="btn btn-secondary btn-wide text-white  w-full lg:w-auto"
          onClick={() => deleteTransaction(id)}
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default Delete;
