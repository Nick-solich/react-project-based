import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaChild, FaInbox } from "react-icons/fa";

export default function Navbar() {
  // Styled Component Section
  const Navbar = styled.h1`
    background-color: #1a120b;
    color: #fffded;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: ${(props) => props.theme.NavbarHeight};
    gap: 10%;
  `;
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <Navbar>
      <Link to="/" style={linkStyle}>
        <FaHome />
      </Link>
      <Link to="/about" style={linkStyle}>
        <FaChild />
      </Link>
      <Link to="/projects" style={linkStyle}>
        <FaInbox />
      </Link>
    </Navbar>
  );
}
