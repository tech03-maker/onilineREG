// import React from 'react'
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css"

export const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand fw-bolder text-white" href="#">
            <FontAwesomeIcon icon={faBookOpenReader} />
            RazBook
          </a>
        </div>
      </nav>
    </div>
  );
};
