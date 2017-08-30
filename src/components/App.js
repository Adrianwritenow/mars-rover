import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import GetImageForm from './GetImageForm';

class App extends Component {

  render() {
    return (

      <div>
      <header>
        <h1>Welcome to the NASA Rover</h1>
        <h4>Select a rover</h4>
      </header>
        <GetImageForm />
      </div>
    );
  }
}


export default App;
