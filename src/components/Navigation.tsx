import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

interface IProps {
}

//define state
const initialState ={
  subNav: 'OFF'
}
type State = Readonly<typeof initialState>

class Navigation extends React.Component<IProps, State> {
  readonly state: State = initialState;
  //change state.view from mouseCLick
 subNav(e:string){
  this.setState({subNav: e})
 }
   render(){
            return (
              <div>
              <div id="myNavRow2" className={this.state.subNav === 'ON' ? 'nav subNavON' : 'nav subNavOff'} >
              <ul>
                
                  <li key="Devices">
                    <NavLink exact to="/setup/devices" activeClassName="active">Devices</NavLink>
                  </li>

              </ul>
            </div>
            <div id="myNav" className="nav">
                <ul>
                  <li key="main">
                      <NavLink exact to="/" activeClassName="active" onClick={() => this.subNav('OFF')}>Main page</NavLink>
                    </li>
                  <li key="status">
                      <NavLink exact to="/status" activeClassName="active" onClick={() => this.subNav('OFF')}>Status</NavLink>
                    </li>
                    <li key="Setup">
                      <div  className="dividerBTN" onClick={() => this.subNav('ON')}>Setup</div>
                    </li>
                </ul>
                <button id="logOff" onClick={() => window.location.reload(false)}>LOG OFF</button>
              </div>
              </div>
            )
          }
}

export default Navigation;
