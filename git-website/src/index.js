import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HashRouter, Route, Switch } from 'react-router-dom';
import GoogleInternshipBlog from "./pages/GoogleInternshipBlog.js";
import Shaw from "./pages/Shaw.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/google" component={GoogleInternshipBlog} />
      <Route path="/shaw" component={Shaw} />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);