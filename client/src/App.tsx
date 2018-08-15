import './App.css';
import * as React from 'react';
import { eel } from "./classes/eel";

const logo = require('./logo.svg');

interface CmpProps {}

class App extends React.Component {
  constructor(props: CmpProps) {
    super(props);

    eel.set_host('ws://localhost:8888');

    eel.add(100, 100);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Testing auto reload
        </p>
      </div>
    );
  }
}

export default App;
