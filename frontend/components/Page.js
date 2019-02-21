import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { theme, StyledPage, Inner, GlobalStyles } from './styles/PageStyles';

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
