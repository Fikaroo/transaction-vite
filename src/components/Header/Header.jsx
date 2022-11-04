import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-8 py-4">
      {/* <Link to={"/"}> */}
      <button className="btn glass btn-primary text-4xl font-medium italic">
        My Transactions
      </button>
      {/* </Link> */}
    </div>
  );
};

export default Header;
