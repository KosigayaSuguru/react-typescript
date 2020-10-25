import { ReactDefault } from 'container/ReactDefault';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><ReactDefault /></Route>
      </Switch>
    </Router>
  );
}

export default App;
