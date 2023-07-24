import React, { FC, PropsWithChildren } from "react";
import "./Page.css";

const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page">
      <div className="page__content">{children}</div>
    </div>
  );
};

export { Page };
