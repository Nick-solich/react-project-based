import React, { useState } from "react";
import styled from "styled-components";
import {
  EmployeesGridBox,
  EmployeeFlexBox,
  FemaleIcon,
  MaleIcon,
  FlexContainer,
} from "../../styles/Projects.styles";
import { motion } from "framer-motion";

export default function Employees() {
  const [selectedTeam, setTeam] = useState("TeamA");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

  function handleTeamSelectionChange(e) {
    console.log(e.target.value);
    setTeam(e.target.value);
  }
  function handleEmployeeCardClick(e) {
    const transformEmployees = employees.map((employee) =>
      employee.id === parseInt(e.target.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: null }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformEmployees);
  }
  return (
    <FlexContainer>
      <h2>Employees</h2>
      <select value={selectedTeam} onChange={handleTeamSelectionChange}>
        <option value="TeamA">TeamA</option>
        <option value="TeamB">TeamB</option>
        <option value="TeamC">TeamC</option>
        <option value="TeamD">TeamD</option>
      </select>
      <EmployeesGridBox>
        {employees.map((employee) => (
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
          >
            <EmployeeFlexBox
              id={employee.id}
              variant={
                employee.teamName === selectedTeam ? "selected" : "notSelected"
              }
              onClick={handleEmployeeCardClick}
            >
              {employee.gender === "male" ? <MaleIcon /> : <FemaleIcon />}
              <h4>Fullname : {employee.fullName}</h4>
              <p>
                <b>Designation</b> : {employee.designation}
              </p>
            </EmployeeFlexBox>
          </motion.div>
        ))}
      </EmployeesGridBox>
    </FlexContainer>
  );
}
