import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import MoreInfo from './Components/MoreInfo/MoreInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/country/:name" component={MoreInfo} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  );
}

export default App;