import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Results from './components/results/Results';
import Listing from './components/listing/Listing';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <HashRouter>
          <div className="App">
            This is the App Component
            <Link to='/'>
              <RaisedButton label="Home" />
            </Link>
            <Link to='/search'>
              <RaisedButton label="Search" />
            </Link>
            <Link to='/results'>
              <RaisedButton label="Results" />
            </Link>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/results' component={Results} />
              <Route path='/listing/:listingId' component={Listing} />
            </Switch>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;