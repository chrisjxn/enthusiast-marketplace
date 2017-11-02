import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/results' component={Results} />
              <Route path='/listing/:id' component={Listing} />
            </Switch>
            <RaisedButton label="Material UI" />
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;