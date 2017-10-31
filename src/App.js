import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Results from './components/results/Results';
import Listing from './components/listing/Listing';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          This is the App Component
          <Route exact path='/' component={Home} />
          <Route path='/search' component={Search} />
          <Route path='/results' component={Results} />
          <Route path='/listings/:id' component={Listing} />
        </div>
      </HashRouter>

    );
  }
}

export default App;