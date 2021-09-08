import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HashRouter, Route, Switch } from 'react-router-dom';
// import GoogleInternshipBlog from "./pages/GoogleInternshipBlog.js";
import ShawAssignment from "./pages/ShawAssignment.js";
import ShawBlog from "./pages/ShawBlog.js";
import GoogleBlog from "./pages/GoogleBlog.js";
import ParentalEngagement from "./pages/ParentalEngagement.js";
import Skipped from "./pages/Skipped.js";
import ScrollToTop from "./ScrollToTop.js";

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path="/"  component={App} />
      <Route path="/ShawAssignment" component={ShawAssignment} />
      <Route path="/ShawBlog" component={ShawBlog} />
      <Route path="/GoogleBlog" component={GoogleBlog} />
      <Route path="/ParentalEngagement" component={ParentalEngagement} />
      <Route path="/Skipped" component={Skipped} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);