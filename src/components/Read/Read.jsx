import axios from "axios";
import React, { useEffect, useState } from "react";

const Read = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const getTransaction = async (from, to) => {
    let res;
    if (from && to) {
      res = await axios.get(`${baseUrl}?from=${from}&to=${to}`);
    } else {
      res = await axios.get(baseUrl);
    }
    if (!res.data) {
      return;
    }
    const data = res.data;
    setTransactionData(data);
    setFrom("");
    setTo("");
  };
  useEffect(() => {
    getTransaction();
  }, []);
  return (
    <div className="w-full mx-auto max-w-7xl p-10  bg-white shadow-2xl rounded-lg transition-all">
      <h1 className="text-center text-4xl font-black mb-8">Get Transaction</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 justify-items-center p-4 rounded-md">
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
        <button
          className="btn btn-secondary btn-wide text-white"
          onClick={() => getTransaction(from, to)}
        >
          Execute
        </button>
      </div>

      <h2 className="text-center text-2xl font-bold my-4">Transactions</h2>
      <div className="overflow-x-auto">
        <table className=" table-compact md:table w-full table-zebra">
          <thead>
            <tr>
              <th>Id</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionData &&
              transactionData.map((transaction) => (
                <tr key={transaction.id}>
                  <th>{transaction.id}</th>
                  <td>{transaction.from}</td>
                  <td>{transaction.to}</td>
                  <td>{transaction.amount}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
