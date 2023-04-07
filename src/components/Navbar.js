import React from "react";
import PropTypes from "prop-types";
// import {a} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/TextUtils-React_JS">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/TextUtils-React_JS">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
            </ul>
            

            <div
              className={`form-check form-switch mx-2 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Themes
              </label>
            </div>
          </div>

          <button
            className="px-3 py-3 mx-1 border border-none rounded-3" onClick={()=>{props.ChangeMode("black","white")}}
            style={{ backgroundColor: "white" }}
          />
        <button className="px-3 py-3 mx-1 border border-none rounded-3" onClick={()=>{props.ChangeMode("white","#142130")}} style={{backgroundColor:"#142130"}} />
        <button className="px-3 py-3 mx-1 border border-none rounded-3" onClick={()=>{props.ChangeMode("white", "#053a1b")}} style={{backgroundColor:"#053a1b"}} />
        <button className="px-3 py-3 mx-1 border border-none rounded-3" onClick={()=>{props.ChangeMode("white", "#3a0505")}} style={{backgroundColor:"#3a0505"}} />
        <button className="px-3 py-3 mx-1 border border-none rounded-3" onClick={()=>{props.ChangeMode("white", "#37053a")}} style={{backgroundColor:"#37053a"}} />
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired };
// protypes is used define the data types of each property components

Navbar.defaultProps = {
  title: "Default Title",
  // this default value will be used when no property value will be passed from app.js
};
