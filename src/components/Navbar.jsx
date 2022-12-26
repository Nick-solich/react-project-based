import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Navbar() {
  // Styled Component Section
  const Navbar = styled.h1`
    background-color: #1a120b;
    color: #fffded;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 60px;
    gap: 40px;
    margin: 0;
  `;
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  return (
    <Navbar>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/projects" style={linkStyle}>
        Projects
      </Link>
    </Navbar>
  );
}
