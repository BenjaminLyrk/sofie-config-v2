import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Status from './components/Status';
import Devices from './components/Devices';
import Test from './components/Test';
import Navigation from './components/Navigation';
import Lost from './components/Lost';

interface IProps {
}

interface IState {
}


class App extends  React.Component<IProps, IState> {

 
  render() {
    return (
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route exact path="/" render={(props) => (
              <Home />
            )} />
            <Route exact path="/status" component={Status} />
            <Route exact path="/setup/Devices" component={Devices} />
            <Route exact path="/test" component={Test} />
            <Route component={Lost} />
          </Switch>
          <Navigation/>
        </div>
      </Router>
    );
  }
}

export default App;
