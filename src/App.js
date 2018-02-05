import React, { Component } from 'react';

import './App.css';
import InputForm from './components/InputForm'
import ListUsers from './components/ListUsers'
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <div className="container">

              <Route exact path="/" render={()=><InputForm />} />
              <Route path="ListUsers" render={()=> <ListUsers />} />
              <ListUsers />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}



export default App;
