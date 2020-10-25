import { BootstrapTest } from 'container/BootstrapTest';
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
        <Route exact path="/"><ReactDefault />
        </Route>
        <Route exact path="/bootstrap"><BootstrapTest />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
