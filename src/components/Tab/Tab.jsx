import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Tab = () => {
  const pathName = useLocation().pathname;
  const [tabs, setTabs] = useState([
    {
      to: "/",
      name: "POST",
      active: false,
    },
    {
      to: "/getTransaction",
      name: "GET",
      active: false,
    },
    {
      to: "/updateTransaction",
      name: "UPDATE",
      active: false,
    },
    {
      to: "/deleteTransaction",
      name: "DELETE",
      active: false,
    },
  ]);

  const tabActive = (id) => {
    const updatedTab = tabs.map((tab, idx) =>
      idx === id
        ? {
            to: tab.to,
            name: tab.name,
            active: true,
          }
        : {
            to: tab.to,
            name: tab.name,
            active: false,
          }
    );
    setTabs(updatedTab);
  };

  useEffect(() => {
    if (pathName === "/") {
      tabActive(0);
    } else if (pathName[1].includes("g")) {
      tabActive(1);
    } else if (pathName[1].includes("u")) {
      console.log("ok");
      tabActive(2);
    } else if (pathName[1].includes("d")) {
      tabActive(3);
    }
  }, []);

  return (
    <div className="tabs tabs-boxed mx-auto w-full max-w-max mb-4">
      {tabs.map((tab, idx) => {
        return (
          <Link
            key={idx}
            to={tab.to}
            className={`tab tab-lg transition-all ${
              tab.active && "tab-active"
            }`}
            onClick={() => tabActive(idx)}
          >
            {tab.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Tab;
