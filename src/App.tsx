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

const initialState ={
  isLoggedIn: 0 
}
interface IProps {
}

type IState = Readonly<typeof initialState>

class App extends  React.Component<IProps, IState> {
  readonly state: IState = initialState;
  
  handleLogin(){
    this.setState({isLoggedIn: 1 })
    }
  render() {
    if (this.state.isLoggedIn > 0){
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
    } else {
      return(
        <div className="login">
                    <h1>Log in please</h1>
                    <form>
                        <select  onChange={() => this.handleLogin()} >
                            <option value="0">CHOOSE LOGIN</option>
                            <option value="10">AFV D</option>
                            <option value="11">AFV C</option>
                            <option value="1">USER</option>
                            <option value="100">ADMIN</option>
                        </select>
                    </form>
                </div>
      )
    }
  }
}

export default App;
