import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Page } from "./components/Page";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Page1 } from "./pages/Page1";
import { Page2 } from "./pages/Page2";
import { Page3 } from "./pages/Page3";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Header />
        <Switch>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="*">
            <Redirect to="/page1" />
          </Route>
        </Switch>
        <Footer />
      </Page>
    </BrowserRouter>
  );
}

export default App;
