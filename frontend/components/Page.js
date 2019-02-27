import { ThemeProvider } from 'styled-components';
import Header from './header/Header';
import Meta from './header/Meta';
import { theme, StyledPage, Inner, GlobalStyles } from './_styles/PageStyles';

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{children}</Inner>
        </StyledPage>
      </>
    </ThemeProvider>
  );
};

export default Page;
