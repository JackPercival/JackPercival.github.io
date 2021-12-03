import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageLight from "./pages/HomepageLight";
import HomepageDark from "./pages/HomepageDark";
import Homepage2 from "./pages/Homepage2";
import Homepage2Light from "./pages/Homepage2Light";
import Homepage2Dark from "./pages/Homepage2Dark";
import Homepage3 from "./pages/Homepage3";
import Homepage3Light from "./pages/Homepage3Light";
import Homepage3Dark from "./pages/Homepage3Dark";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" >
          <Homepage3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
