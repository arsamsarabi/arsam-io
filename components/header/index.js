import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  box-sizing: border-box;
  width: 100vw;
  height: 48px;
  background-color: whitesmoke;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  padding: 0 16px;
  & > a {
    text-decoration: none;
    color: royalblue;
    font-weight: 700;
    &:not(:first-of-type) {
      margin-left: 16px;
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </StyledHeader>
);

export default Header;
