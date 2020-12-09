import React from 'react';
import MakeButton from './MakeButton';
import galleriItems from '../data/galleries.json';

let studios: string[] = ['Studio 3', 'Studio 4', 'Studio 12']; 
let rundowns: string[] = ['SPXRT.ON-AIR', 'SPORTEN.ON-AIR', 'NYHEDERNE-TEST.SOFIE.ON-AIR']; 
let gui: string[] = ['FLOW GUI', 'TOUCH GUI', 'TEST GUI']; 


interface IProps {
}

//define state
const initialState ={
  text: 'settings',
  deviceView: 'defaultView',
  infoView: 'defaultView',
  deviceId: 0,
  galleriId: 0,
  galActive: '',
  devActive: ''
}
//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Home extends React.Component {
  readonly state: State = initialState;
   //change state.view from mouseCLick
 changeDevices(e:string, name: string){
        this.setState({galActive: name })
            }
    
    render(){  

                //galleries
                const galleriColm = galleriItems.content.galleries.map((items: any, index: Number) => ( 
                  <>
                  <button 
                    key={items.name+items.id} 
                    className={this.state.galActive === items.name ? 'btnGreen active' : 'btnGreen'} 
                    value={items.id} 
                    onClick={() => this.changeDevices('s'+index, items.name)} 
                    >
                    {items.name}
                  </button>
                  <div className={this.state.galActive === items.name ? 'controlBTN active' : 'controlBTN'} >
                    <MakeButton
                                        btnText   = {'BROWSE'}
                                        btnClass  = {'btnBrowse'}
                                        btnValue  = {'startBrowse'}
                                        />
                  
                     <MakeButton
                     btnText   = {'ACTIVE'}
                     btnClass  = {'btnStart'}
                     btnValue  = {'start'}
                     />
                    </div>
                    </>
                  ))
                  return (              
                          <div className="pageWrapper home">
                                <div className="btn-group col1"> 
                                <h2>galleries</h2> 
                                {galleriColm}
                                  </div>
                                  <div className="btn-group col2">
                                  <h2>Studios</h2> 
                                      {studios.map(i => (
                                        <MakeButton
                                        btnText   = {i}
                                        btnClass  = {'btnBlue'}
                                        btnValue  = {i}
                                        />
                                      ))}
                                  </div>
                                  <div className="btn-group col3">
                                  <h2>Rundowns</h2> 
                                      {rundowns.map(i => (
                                                <MakeButton
                                                btnText   = {i}
                                                btnClass  = {'btnPurple'}
                                                btnValue  = {i}
                                                />
                                      ))}
                                  </div>
                                  <div className="btn-group col4">
                                    <h2>GUI</h2> 
                                      {gui.map(i => (
                                                <MakeButton
                                                btnText   = {i}
                                                btnClass  = {'btnCyan'}
                                                btnValue  = {i}
                                                />
                                      ))}
                                  </div>
                                  <div className="below">

                                  </div>
                                </div>
                          )
              }
}

export default Home;