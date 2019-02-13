import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          FIFA 19 Table
        </header>
        <Layout />
      </div>
    );
  }
}

export default App;
