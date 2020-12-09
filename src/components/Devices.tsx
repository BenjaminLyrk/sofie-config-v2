import React from 'react'
import settingsJson from '../data/galleries.json'


interface IProps {
  btnText: string,
  btnClass: string,
  btnValue:  string
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

class Devices extends React.Component<IProps, State>{
  readonly state: State = initialState;



 //change state.view from mouseCLick
 changeDevices(e:string, name: string){
  this.setState({deviceView: e})
  let f:number = parseInt( e.substring(1) );
  this.setState({galleriId: f })
  this.setState({deviceId: 0 })
  this.setState({galActive: name })
 
 }
 changeinfo(e:string, name: string){
  this.setState({infoView: e})
  let f:number = parseInt( e.substring(1) );
  this.setState({deviceId: f })
  this.setState({devActive: name })
 }



  render(){  
              //galleries
              const galleriColm = settingsJson.content.galleries.map((items: any, index: Number) => ( 
                <button 
                  key={items.name+items.id} 
                  className={this.state.galActive === items.name ? 'btnGreen active' : 'btnGreen'} 
                  value={items.id} 
                  onClick={() => this.changeDevices('s'+index, items.name)} 
                  >
                  {items.name}
                </button>
                ))

              let deviceColm: any = ''
  
              if (this.state.deviceView === 'defaultView'){
                deviceColm = (<p>no settings</p>)
              } else if (this.state.deviceView.length >= 2) {
                deviceColm = settingsJson.content.galleries[this.state.galleriId].devices.map((t: any, index) => (
                                              <button 
                                              key={t.name+t.id} 
                                              className={this.state.devActive === t.name ? 'btnBlue active' : 'btnBlue'} 
                                              value={t.id} 
                                              onClick={() => this.changeinfo('i'+index, t.name)}>
                                                {t.name}
                                              </button>
                                           
                    ));
              } else {
                deviceColm = (<p>no settings</p>)
              }
              //infoColm
              let infoColm: any = ''
              if (this.state.infoView === 'defaultView'){
                infoColm = (<p>no settings</p>)
              } else if (this.state.infoView.length >= 2) {
                infoColm = Object.entries(settingsJson.content.galleries[this.state.galleriId].devices[this.state.deviceId].param[0]).map(([key, value]) => {
                                                if (key.includes('#DEVIDER#') ) {
                                                    return (
                                                    <div><h3>{value}</h3></div>
                                                    )
                                                  } else {
                                                    return (
                                                      
                                                      <div key={key+[this.state.deviceId]}>
                                                          <div className="infoKey">{key}</div>
                                                          <div className="infoValue">{value}</div>
                                                      </div>
                                                      )
                                                  }  
                                            })
                                         
            } else {
                infoColm = (<p>no settings</p>)
              }
          return (
            <div className="pageWrapper status">
                  <div className="btn-group col1">  
                      {galleriColm}
                  </div>
                  <div className="btn-group col2">  
                      {deviceColm}
                  </div>
                  <div className="btn-group colInfo"> 
                      
                        {infoColm}
                      
                  </div>
                 
            </div>    
          
          )
               
        }
}
export default Devices;
