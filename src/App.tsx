import { BootstrapTest } from 'container/BootstrapTest';
import { ReactDefault } from 'container/ReactDefault';
import { RenderCheck } from 'container/RenderCheck';
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';

function App() {
  console.log('called App()');

  return (
    <Router>
      <Switch>
        <Route exact path="/"><ReactDefault />
        </Route>
        <Route exact path="/bootstrap"><BootstrapTest />
        </Route>
        <Route exact path="/rendercheck"><RenderCheck />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
