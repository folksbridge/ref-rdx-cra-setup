import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction'

class App extends Component {

   simpleAction = (event) => {
    this.props.simpleAction();
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.simpleAction}>Test redux action</button>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
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
    );
  }
}

const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

//export default App;
//export default connect()(App);
export default connect(mapStateToProps, mapDispatchToProps)(App);
