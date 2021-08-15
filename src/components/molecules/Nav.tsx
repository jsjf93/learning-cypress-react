import { NavLink, useLocation } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)<{ $active: boolean }>`
  margin: 0 0.5em;
  text-decoration: none;

  ${({ $active }) =>
    $active &&
    css`
      font-weight: bold;
    `}
`;

export function Nav() {
  const location = useLocation();

  return (
    <StyledNav>
      <StyledLink exact to="/" $active={location.pathname === "/"}>
        Home
      </StyledLink>
      <StyledLink
        to="/calculator"
        $active={location.pathname === "/calculator"}
      >
        Calculator
      </StyledLink>
    </StyledNav>
  );
}
