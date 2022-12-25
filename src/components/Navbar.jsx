import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Navbar() {
  // Styled Component Section
  const Navbar = styled.div`
    background-color: white;
    color: #fffded;
    display: flex;
    position: relative;
    align-items: center;
    height: 60px;
    gap: 40px;
    font-size: 1.2rem;
  `;
  const linkStyle = {
    margin: "5px",
    textDecoration: "none",
    color: "blue",
  };
  return (
    <Navbar>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/project1" style={linkStyle}>
        Project1
      </Link>
    </Navbar>
  );
}
