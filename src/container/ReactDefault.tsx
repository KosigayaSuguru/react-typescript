import 'App.css';
import { MyComponent } from 'components/component';
import logo from 'logo.svg';
import React, { useEffect } from 'react';

export function ReactDefault() {

  useEffect(() => {
    document.title = 'ReactDefault';
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent foo="aaaa" />
      </header>
    </div>
  );
}