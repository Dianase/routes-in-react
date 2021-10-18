import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home"
import "./App.css";

function App() {
  return (
    <Router>
      <header>
        <nav
          style={{
            padding: "1em",
            backgroundColor: "lightgrey",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink exact to="/about">
            About
          </NavLink>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
      <Switch>
      <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/contact'>
        <h1>Contact</h1>
        </Route>
        <Route path='/about'>
        <About/>
        </Route>
        <Route path='/'>
        <h1>404- Page not found</h1>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
