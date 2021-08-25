import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Home from "./components/Home/Home";
import Hero from "./components/Hero/Hero";
import CategoryPage from "./components/CategoryPage/CategoryPage";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Wrapper } from "./components/shared/Wrapper.elements";
import SingleItemPage from "./components/SingleItemPage/SingleItemPage";

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <Header />

          <Route exact path="/">
            <Hero />
          </Route>

          <Wrapper>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path={["/headphones", "/speakers", "/earphones"]}>
              <CategoryPage />
            </Route>
            <Route path="/item/:itemId">
              <SingleItemPage />
            </Route>
          </Wrapper>

          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
