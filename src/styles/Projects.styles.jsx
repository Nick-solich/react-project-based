import styled from "styled-components";
import { FaFemale, FaMale } from "react-icons/fa";

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
  :hover {
    transform: scale(1.1);
    transition: 0.5s ease-out;
  }
`;
export const MaleIcon = styled(FaMale)`
  color: #3f31da;
  font-size: 5rem;
`;
export const FemaleIcon = styled(FaFemale)`
  color: #ea4bb5;
  font-size: 5rem;
`;
