import React from "react";

import "./MainHeader.css";

interface HeaderProps {
  children: React.ReactNode;
}

const MainHeader: React.FC<HeaderProps> = (props) => (
  <header className="main-header">{props.children}</header>
);

export default MainHeader;
