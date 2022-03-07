import Home from "./Home";
import NavBar from "./NavBar";
import Platform from "./Platform";
import Preorder from "./Preorder";
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
      <Route exact path="/preorder">
        <Preorder />
      </Route>
      <Route exact path="/platform">
        <Platform />
      </Route>
      
    </Switch>
    </>
    </Router>
  );
}

/* comment */
export default App;
