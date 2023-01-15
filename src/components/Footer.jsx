import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Main = styled.div`
    background-color: #1a120b;
    color: #fffded;
    width: 100%;
    height: ${(props) => props.theme.NavbarHeight};
    font-size: 0.5rem;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <Main>
        <h1>
          This website was created for the purpose of serving as a project in an
          internship program.
        </h1>
      </Main>
    </>
  );
}
