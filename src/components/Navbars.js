import React from "react";
import tachyons from 'tachyons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import '../App.css'

export const Navbars = ({ title, onClick}) => {
  return (
    <div className="navbar">
      <div className="title">
        <FontAwesomeIcon className="ma2" icon={faFreeCodeCamp} />
        <h3>{title}</h3>
      </div>
      <FontAwesomeIcon
      style={{cursor: 'pointer'}}
      onClick={onClick} className="ma2" icon={faMaximize} />
    </div>
  );
};
