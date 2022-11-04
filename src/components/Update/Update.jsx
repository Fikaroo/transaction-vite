import axios from "axios";
import React, { useState } from "react";

const Update = () => {
  const [id, setId] = useState(0);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [msgClass, setMsgClass] = useState("hidden");
  const [msg, setMsg] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const putTransaction = async (from, to, amount, id) => {
    const res = await axios
      .put(`${baseUrl}/${id}`, {
        from: from,
        to: to,
        amount: amount,
      })
      .catch(() => {
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
      setMsg("Your transition changed successful!");
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
      setAmount(0);
      setFrom("");
      setTo("");
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
      <div className="grid grid-cols-1 lg:grid-cols-2 ml-auto max-w-5xl gap-4 p-4 rounded-md ">
        <div className="form-control">
          <label className="input-group">
            <span>Transaction Id *</span>
            <input
              type="input"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Transaction Id"
              className="input input-bordered"
              required
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>From</span>
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value.trim())}
              placeholder="from"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>To</span>
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value.trim())}
              placeholder="to"
              className="input input-bordered"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="input-group">
            <span>Amount</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="amount"
              className="input input-bordered"
            />
          </label>
        </div>
      </div>
      <div className="w-full flex justify-center mt-2">
        <button
          className="btn btn-secondary btn-wide text-white"
          onClick={() => putTransaction(from, to, amount, id)}
        >
          Execute
        </button>
      </div>
    </div>
  );
};

export default Update;
