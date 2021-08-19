import { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import axios from "axios";

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import Home from "./components/Home/Home";
import Hero from "./components/Hero/Hero";
import Headphones from "./components/Headphones/Headphones";
import Speakers from "./components/Speakers/Speakers";
import Earphones from "./components/Earphones/Earphones";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Wrapper } from "./components/shared/Wrapper.elements";

function App() {
  useEffect(() => {
    axios.get("http://localhost:1337/products").then(response => {
      console.log(response);
    });
  }, []);

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
            <Route path="/headphones">
              <Headphones />
            </Route>
            <Route path="/speakers">
              <Speakers />
            </Route>
            <Route path="/earphones">
              <Earphones />
            </Route>
          </Wrapper>

          <Footer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
