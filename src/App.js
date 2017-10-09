import React, { Component } from 'react';
import { Router, Miss } from 'react-router';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import HistoricalWeather from './component/historical-weather';
import TodayWeather from './component/today-weather';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const city = 'Austin';
    const temp = '77.11';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rackspace Weather Portal</h1>
        </header>
        <p className="App-intro">

            <BrowserRouter>
                <div className="container">
                    <ul className="nav navbar-toggler">
                        <li><Link to='/today'>Today's Forecast</Link></li>
                        <li><Link to='/history'>Last five days</Link></li>
                    </ul>
                    <br/>
                    <div className="list-inline">
                        <Route path='/today' component={TodayWeather}/>
                        <Route path='/history' component={HistoricalWeather}/>
                    </div>
                </div>
            </BrowserRouter>

      </p>
      </div>
    );
  }
}

export default App;
