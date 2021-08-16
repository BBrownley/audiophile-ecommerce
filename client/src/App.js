import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Headphones from "./components/Headphones/Headphones";
import Speakers from "./components/Speakers/Speakers";
import Earphones from "./components/Earphones/Earphones";

function App() {
  return (
    <div className="App">
      <Router>
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
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/headphones">headphones</Link>
          </li>
          <li>
            <Link to="/speakers">speakers</Link>
          </li>
          <li>
            <Link to="/earphones">earphones</Link>
          </li>
        </ul>
      </Router>
    </div>
  );
}

export default App;
