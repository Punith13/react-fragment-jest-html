import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class AppReactFragment extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <button className="button">Test button</button>
      </React.Fragment>
    )
  }
}

export default AppReactFragment
