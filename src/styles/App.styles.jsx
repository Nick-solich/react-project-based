import styled from "styled-components";

export const AppBody = styled.body`
  position: relative;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.light.primary};
  min-height: calc(
    100vh - ${(props) => props.theme.NavbarHeight} -
      ${(props) => props.theme.FooterHeight}
  );
`;
const TemplateBody = styled.div`
  background-color: ${(props) => props.theme.light.secondary};
  color: ${(props) => props.theme.light.text};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const NavbarBody = styled(TemplateBody)`
  height: ${(props) => props.theme.NavbarHeight};
  gap: 10%;
  font-size: 2rem;
`;
export const FooterBody = styled(TemplateBody)`
  height: ${(props) => props.theme.NavbarHeight};
  font-size: 0.5rem;
  padding: 1rem;
`;
