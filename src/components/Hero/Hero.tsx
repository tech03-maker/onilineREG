// import React from 'react'
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Hero.css";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import sideImg from "../../assets/images.jpeg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 text-white">
            <h3 className="fw-bold fs-1 mt-5 animate__animated animate__fadeInUp">
              Learn With AbduRozaq
            </h3>
            <p className="animate__animated animate__fadeInUp">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
              consequatur sapiente accusantium, quam, facere debitis aut saepe
              laborum sed voluptas qui eaque illo labore nisi fuga sunt soluta
              hic!
            </p>
            <div className="row animate__animated animate__fadeInUp">
              <div className="p-2">
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
              <div className="p-2">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div className="p-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </div>
            <a href="#">
              <button
                className="regbtn w-100 mt-3 animate__animated animate__fadeInUp mb-4"
                type="button"
              >
                Register
              </button>
            </a>
          </div>
          <div className="col-12 colsm-12 col-md-6 col-lg-6 animate__animated animate__fadeInDown">
            <img className="w-100" src={sideImg} alt="" />
          </div>
        </div>
        <p className="copyright text-center text-white mt-5">
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2023
        </p>
      </div>
    </div>
  );
};
