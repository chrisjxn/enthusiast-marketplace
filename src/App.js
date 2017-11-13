import React, { Component } from 'react';
import './App.css';
// import logo from './assets/halcyon-logo.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Search from './components/search/Search';
import Results from './components/results/Results';
import Listing from './components/listing/Listing';
import Configurator from './components/configurator/Configurator';
import ConfigResults from './components/configResults/ConfigResults';

// get themes for the muiTheme below at this link: https://sm-react.github.io/storybook-boilerplate/?theme-ind=0&theme-sidebar=false&theme-full=false&knob-Title=Welcome%20to%20React-Theming&knob-Subtitle=Storybook%20Boilerplate%20Project&knob-Label1=Hello%20Button&knob-Label2=Hello%20Button&selectedKind=Material-UI&selectedStory=Components&full=0&down=1&left=1&panelRight=0&downPanel=sm%2Fstorybook-addon-material-ui%2Fmaterial-panel

const muiTheme = getMuiTheme({
  palette: {
    // primary1Color: '#008AC9',
    // primary2Color: '#26c6da',
    // primary3Color: '#90caf9',
    // accent1Color: '#ff4081',
    // accent2Color: '#f50057',
    // accent3Color: '#ff80ab',
    // textColor: 'rgba(0, 0, 0, 0.7)',
    // secondaryTextColor: '#303030',
    // alternateTextColor: 'rgba(255,255,255,0.7)',
    // canvasColor: '#303030',
    // borderColor: 'rgba(255,255,255,0.3)',
    // disabledColor: 'rgba(255,255,255,0.3)',
    // pickerHeaderColor: 'rgba(255,255,255,0.12)',
    // clockCircleColor: 'rgba(255,255,255,0.12)',
    // shadowColor: 'rgba(0, 0, 0, 1)',
    // alternateСanvasColor: '#e0e0e0',
    // alternate1Color: 'rgba(0, 0, 0, 0.54)',
    // alternate2Color: '#616161',
  },
  checkbox: {
    boxColor: 'rgba(0, 0, 0, 0.54)',
    checkedColor: '#008AC9',
    // requiredColor: '#008AC9',
    // disabledColor: 'rgba(255,255,255,0.3)',
    labelColor: 'rgba(0, 0, 0, 0.7)',
    // labelDisabledColor: 'rgba(255,255,255,0.3)',
  },
  paper: {
    color: 'rgba(0, 0, 0, 0.7)',
    backgroundColor: 'rgba(255,255,255,0.87)',
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <HashRouter>
          <div className="App">
            <div>
              <Link to='/'>
                <div className="hidden_home"></div>
                {/* <img className="logo" src={logo} alt='logo' /> */}
              </Link>
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/results' component={Results} />
              <Route path='/listing/:listingId' component={Listing} />
              <Route path='/configurator/:yearId' component={Configurator} />
              <Route path='/configresults/:colorId' component={ConfigResults} />
            </Switch>
          </div>
        </HashRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;