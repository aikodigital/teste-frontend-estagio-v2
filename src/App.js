import React, { useState, useEffect } from "react";
import usePersistState from "./utils/usePersistState";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle, { Template } from "./styles/global";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [titleTheme, setTitleTheme] = usePersistState("theme", light.title);

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    let changeTheme = titleTheme === "light" ? dark.title : light.title;
    setTitleTheme(changeTheme);
  };

  useEffect(() => {
    const chooseTheme = titleTheme === "light" ? light : dark;
    setTheme(chooseTheme);
  }, [titleTheme]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Template>
          <Header toggleTheme={toggleTheme} />
          <Routes />
          <Footer />
        </Template>
      </ThemeProvider>
    </Router>
  );
};

export default App;
