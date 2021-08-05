import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home';
import Users from './Users';


const App = () => {

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/resources" />
          </Route>
          <Route exact path="/resources/" component={Home} />
          <Route path="/resources/:id" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
