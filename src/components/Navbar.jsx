import React from "react";
import { NavbarBody } from "../styles/AppStyle";
import { Link } from "react-router-dom";
import { FaHome, FaChild, FaInbox } from "react-icons/fa";

export default function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <NavbarBody>
      <Link to="/" style={linkStyle}>
        <FaHome />
      </Link>
      <Link to="/about" style={linkStyle}>
        <FaChild />
      </Link>
      <Link to="/projects" style={linkStyle}>
        <FaInbox />
      </Link>
    </NavbarBody>
  );
}
