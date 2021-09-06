import React from "react";
import { Footer, Header } from "components";
import styled, { createGlobalStyle } from "styled-components";
import { Route } from "react-router";
import {
  AboutPage,
  CalculatorPage,
  MainPage,
  ServicesPage,
  WorksPage,
  DevelopmentPage,
} from "modules";

function App() {
  const headerRef = React.createRef();
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(() => {
    setHeaderHeight(headerRef?.current?.getBoundingClientRect().height);
  }, [headerRef]);

  return (
    <>
      <AppWrapper paddingTop={headerHeight}>
        <GlobalStyles />
        <Header ref={headerRef} />
        <MainContent>
          <Route exact path="/" component={MainPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/works" component={WorksPage} />
          <Route path="/calculator" component={DevelopmentPage} />
          <Route path="/login" component={DevelopmentPage} />
        </MainContent>
      </AppWrapper>
      <Footer />
    </>
  );
}

export default App;

const AppWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 1220px) {
    width: 100%;
  }
  min-height: calc(100vh);
  padding-top: ${(p) => p.paddingTop + 16}px;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
`;

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    min-height: 100vh;
    background-color: #f9f9f9;
    font-family: "Rubik", sans-serif;
    font-size: 16px;
  }

  *::-webkit-scrollbar {
    width: 0px;               /* ширина scrollbar */
    height: 0px;
  }
  *::-webkit-scrollbar-track {
    background: orange;        /* цвет дорожки */
  }
  *::-webkit-scrollbar-thumb {
    background-color: blue;    /* цвет плашки */
    border-radius: 20px;       /* закругления плашки */
    border: 3px solid orange;  /* padding вокруг плашки */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button, input {
    font-family: "Alegreya Sans", sans-serif;
    border: 0;
    outline: none;
    background: inherit;
    font-size: 14px;
  }
`;
