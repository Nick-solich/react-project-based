import styled from "styled-components";
import { FaFemale, FaMale } from "react-icons/fa";

export const EmployeesFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 1rem;
  h2 {
    align-self: center;
  }
`;
export const EmployeesGridBox = styled.div`
  display: grid;
  align-self: center;
  justify-content: space-around;
  width: 90%;
  row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(90%, 270px), 1fr));
  .functionBox {
    z-index: 1;
    position: absolute;
    width: 90%;
    height: 100%;
  }
`;
export const EmployeeFlexBox = styled(EmployeesGridBox)`
  cursor: pointer;
  outline: ${(props) => props.theme.light.secondary} solid
    ${(props) => (props.variant === "selected" ? "2.5px" : "1px")};
  align-content: flex-start;
  height: 100%;
  border-radius: 5pt;
  padding: 5px;
  h4,
  p {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
`;
export const MaleIcon = styled(FaMale)`
  justify-self: center;
  color: #3f31da;
  font-size: 4rem;
`;
export const FemaleIcon = styled(FaFemale)`
  justify-self: center;
  color: #ea4bb5;
  font-size: 4rem;
`;

export const ProjectsSelect = styled.select`
  display: block;
  width: 40%;
  align-self: center;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  -moz-padding-start: calc(0.75rem - 3px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
