import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './Login.css';
import Header from './components/Header';
import Home from './components/Home';
import Status from './components/Status';
import MediaManager from './components/MediaManager';
import Galleries from './components/Galleries';
import Studios from './components/Studios';
import Gui from './components/Gui';
import Devices from './components/Devices';
import Parts from './components/Parts';
import Pieces from './components/Pieces';
import Backup from './components/Backup';
import Rundown from './components/Rundown';
import Shows from './components/Shows';
import Styles from './components/Styles';
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
                  <Route exact path="/MediaManager" component={MediaManager} />
                  <Route exact path="/setup/Galleries" component={Galleries} />
                  <Route exact path="/setup/Studios" component={Studios} />
                  <Route exact path="/setup/Gui" component={Gui} />
                  <Route exact path="/setup/Devices" component={Devices} />
                  <Route exact path="/setup/Parts" component={Parts} />
                  <Route exact path="/setup/Pieces" component={Pieces} />
                  <Route exact path="/setup/Backup" component={Backup} />
                  <Route exact path="/setup/Shows" component={Shows} />
                  <Route exact path="/setup/Styles" component={Styles} />
                  <Route exact path="/rundown" component={Rundown} />
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
                        <input type="text" placeholder="Enter Password" name="uname" />
                    </form>
                </div>
      )
    }
  }
}

export default App;
