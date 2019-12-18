import Header from "../header";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../../styles/global";

const StyledLayout = styled.div``;

const Layout = props => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <StyledLayout>
        <Header />
        {props.children}
      </StyledLayout>
    </ThemeProvider>
  );
};

export default Layout;
