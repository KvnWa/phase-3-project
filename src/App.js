import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import FAQ from "./FAQ";
import GameCard from "./GameCard";
import Watchlist from "./Watchlist";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
    <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/watchlist">
        <Watchlist />
      </Route>
      <Route exact path="/FAQ">
        <FAQ />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      
    </Switch>
    </>
    </Router>
  );
}

/* comment */
export default App;
