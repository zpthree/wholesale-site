import { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import { theme, StyledPage, Inner, GlobalStyles } from './styles/PageStyles';

const Page = ({ page, children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <StyledPage>
        <Meta />
        <Header page={page} />
        <Inner>{children}</Inner>
      </StyledPage>
    </>
  </ThemeProvider>
);

export default Page;
