import Nav from "./components/Nav.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
function App() {
  return (
    <div className="App min-h-screen font-sans bg-rb text-rw">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
