import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
      <Link to="/page3">Page 3</Link>
    </footer>
  );
};

export { Footer };
