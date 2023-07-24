import React, { FC, useMemo } from "react";
import { useLocation } from "react-router";
import "./Header.css";

const Header: FC = () => {
  const location = useLocation();

  const pageName = useMemo(() => {
    switch (location.pathname) {
      case "/page1":
        return "Page 1";
      case "/page2":
        return "Page 2";
      case "/page3":
        return "Page 3";
      default:
        return "Some Page";
    }
  }, [location]);

  return <header className="header">{pageName}</header>;
};

export { Header };
