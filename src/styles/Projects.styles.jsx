import styled from "styled-components";
import { FaFemale, FaMale, FaCaretDown } from "react-icons/fa";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
  padding: 1rem;
`;
export const EmployeesGridBox = styled.div`
  /* outline: ${(props) => props.theme.light.secondary} solid 1px; */
  position: relative;
  display: grid;
  align-self: center;
  justify-content: center;
  width: 90%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 255px), 1fr));
`;
export const EmployeeFlexBox = styled(FlexContainer)`
  cursor: pointer;
  outline: ${(props) => props.theme.light.secondary} solid
    ${(props) => (props.variant === "selected" ? "2.5px" : "1px")};
  border-radius: 5pt;
  padding: 5px;
  align-items: center;
`;
export const MaleIcon = styled(FaMale)`
  color: #3f31da;
  font-size: 4rem;
`;
export const FemaleIcon = styled(FaFemale)`
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
  /* background-image: ${FaCaretDown}; */
  /* background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px; */
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
