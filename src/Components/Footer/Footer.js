import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css"
import {
  faFacebookF,
  faInstagramSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

  return (
    <div className ="text-center m-5 "> 
      <FontAwesomeIcon className ="icon" icon={faFacebookF} />
      <FontAwesomeIcon className ="icon"  icon={faInstagramSquare} />
      <FontAwesomeIcon className ="icon"  icon={faYoutube} />
    </div>
  );
};

export default Footer;
