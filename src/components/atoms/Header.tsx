import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
`;

export const Header: React.FC = ({ children }) => {
  return (
    <StyledHeader>
      <h1>{children}</h1>
    </StyledHeader>
  );
};
