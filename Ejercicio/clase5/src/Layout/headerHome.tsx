import React from "react";
import { Link } from "react-router-dom";

const HeaderHome = ({ children }: any) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">MarketPlace</a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
          <Link to="/Home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Cart" className="nav-link active" aria-current="page" >Cart</Link>
        </li>
            </ul>
            <Link to="/Login" className="nav-link active nav-item   em" >Login</Link>
          </div>
        </nav>
      </header>
      <main>{children}</main>
<footer className="">

  <div className="text-color text-center py-3">
    <h2>Celuewb 2021 Copyright</h2>
  </div>

</footer>
    </>
  );
};
export default HeaderHome;
