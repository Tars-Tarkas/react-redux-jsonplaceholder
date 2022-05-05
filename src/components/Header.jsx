import styled from "styled-components";

function Header({ children }) {
  return <HeaderWrapper>{children}</HeaderWrapper>;
}

const HeaderWrapper = styled.header`
  padding: 10px 0px;
`;

export default Header;
