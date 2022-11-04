import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-8 py-4 mb-4">
      {/* <Link to={"/"}> */}
      <h1 className="text-5xl text-center lg:text-start font-medium italic">
        My Transactions
      </h1>
      {/* </Link> */}
    </div>
  );
};

export default Header;
