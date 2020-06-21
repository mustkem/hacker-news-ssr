import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import resetStyleSheet from "../../css/reset.css";
import globalStyleSheet from "../../css/global.css";

const Header = () => {
  return (
    <header className="header">
      <Helmet>
        <style>{resetStyleSheet}</style>
        <style>{globalStyleSheet}</style>
      </Helmet>
      <div className="container">
        <span className="common">@common</span>
      </div>
    </header>
  );
};

export default Header;
