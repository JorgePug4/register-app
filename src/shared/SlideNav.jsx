import React from "react";
import {
  AiOutlineUsergroupAdd,
  AiOutlineSearch,
  AiFillSignal,
  AiOutlinePoweroff,
} from "react-icons/ai";
import "./sidenav.css";
import logo from "../assets/Logo2x.png";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <div className="cont-sidenav">
      <div className="cont-logo">
        <img className="logo-img" src={logo} alt="" />
      </div>
      <div className="cont-menu">
        <NavLink to="/Register" activeClassName="active">
          <AiOutlineUsergroupAdd />
        </NavLink>
        <NavLink to="/Search" activeClassName="active">
          <AiOutlineSearch />
        </NavLink>
        <NavLink to="/Test" activeClassName="active">
          <AiFillSignal />
        </NavLink>
      </div>
      <div className="cont-logout">
        <NavLink to="/" activeClassName="active">
          <AiOutlinePoweroff />
        </NavLink>
      </div>
    </div>
  );
}
