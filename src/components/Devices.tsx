import React from 'react'
import {createInfoItems} from './Helper'
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
  areaView: 'defaultView',
  infoView: 'defaultView',
  deviceId: 0,
  galleriId: 0,
  areaId: 0,
  galActive: '',
  devActive: '',
  areaActive: '',
  overMe: ''
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
    this.setState({galActive: name })
  
  }
  changeArea(e:string, name: string){
    this.setState({areaView: e})
    let f:number = parseInt( e.substring(1) );
    this.setState({deviceId: f })
    this.setState({devActive: name })
    this.setState({infoView: '' })
   }
  
  changeinfo(e:string, name: string){
   this.setState({infoView: e})
   let f:number = parseInt( e.substring(1) );
   this.setState({areaId: f })
   this.setState({areaActive: name })
   }
 
   handleBoxToggle(e:string){
     if(this.state.overMe  !== e)
     { 
      this.setState({overMe: e })
      } else {
        this.setState({overMe: '' })
      }
   }


   

 
   render(){  
               //galleries column
             const galleriColm = settingsJson.content.galleries.map((items: any, index: Number) => ( 
              <button 
                key={items.name+items.id} 
                className={this.state.galActive === items.name ? 'btnBlue active' : 'btnBlue'} 
                value={items.id} 
                onClick={() => this.changeDevices('s'+index, items.name)} 
                >
                {items.name}
              </button>
              ))
            
              
            //deviceColumn
            let deviceColm: any = ''
            let id:string = ''
            if (this.state.deviceView === 'defaultView'){
              deviceColm = (<p>Choose galleri</p>)
            } else if (this.state.deviceView.length >= 2) {
              deviceColm = settingsJson.content.galleries[this.state.galleriId].devices.map((t: any, index: number) => { 
                                            //id = randomId(0,1000000)
                                            id = t
                                            return (
                                            <button 
                                            key={id} 
                                            className={this.state.devActive === t.name ? 'btnGreen active' : 'btnGreen'} 
                                            onClick={() => this.changeArea('i'+index, t.name)}>
                                              {t.name}
                                            </button>

                                         )})
               } else {
                 deviceColm = (<p>choose galleri</p>)
               }



               //area column
               let areaColm: any = ''
               if (this.state.areaView === 'defaultView'){
                areaColm = (<p>Choose device</p>)
              } else if (this.state.areaView.length >= 2) {
                        areaColm = settingsJson.content.galleries[this.state.galleriId].devices[this.state.deviceId].area.map((t:any, index: number) => { 
                          //id = randomId(0,1000000)
                          id= t
                          return (
                             <button 
                              key={id} 
                              className={this.state.areaActive === t.name ? 'btnCyan active' : 'btnCyan'} 
                              value={t.name} 
                              onClick={() => this.changeinfo('i'+index, t.name)}>
                                {t.name}
                              </button>
                
                                    
                      )})
                    // areaColm.push(<div className="addItem"><button className="addItem btnGrey">add new hardware</button></div>);
                      
              } else {
                areaColm = (<p>choose device</p>)
              } 




               //infoColm
               let infoColm: any = ''
               if (this.state.infoView === 'defaultView'){
                 infoColm = (<p>choose area</p>)
               } else if (this.state.infoView.length >= 2) {
                 infoColm = settingsJson.content.galleries[this.state.galleriId].devices[this.state.deviceId].area[this.state.areaId].param.map((t: any, index:number) => {
                                                      
                                                      //TO DO function fires constantly 
                                                      id = t._id //randomId(0,1000000) 
                                                      let valueItem = createInfoItems(t.value)
                                                      return (
                                                       <div key={t._id} className="infoItem">
                                                           <div className={t.divider.length > 0 ? 'divider' : 'hideValue '} >{t.divider}</div>
                                                           <div className="hideValue">{t._id}</div>
                                                           <div className="infoKey"
                                                              onMouseOver={() => this.handleBoxToggle( t._id)}
                                                              onMouseOut={() => this.handleBoxToggle( t._id)}
                                                           >{t.name}</div>
                                                           <div className="infoValue">
                                                             {valueItem}</div>
                                                             <div className={this.state.overMe ===  t._id ? 'help show' : 'help hide'}>
                                                                {t.blueprint}
                                                            </div>   
                                                       </div>
                                                       )
                                                   
                                             })
                infoColm.push(<div className="addItem"><button className=" btnGrey">add new setting</button></div>);
                                          
             } else {
                 infoColm = (<p>choose area</p>)
               }
           return (
             <div className="pageWrapper status">
                   
                   <div className="btn-group col1">
                   <h2>Galleries</h2>  
                       {galleriColm}
                   </div>
                   <div className="btn-group col2">  
                   <h2>Gateways</h2> 
                       {deviceColm}
                   </div>
                   <div className="btn-group col3"> 
                   <h2>Area</h2>  
                       {areaColm}
                       
                   </div>
                   <div className="btn-group colInfo"> 
                   <h2>Blueprint Settings</h2> 
                         {infoColm}
                       
                   </div>
                   <div id="arrow1"></div>
                   <div id="arrow2"></div>
                   <div id="arrow3"></div>
             </div>    
           
           )
                
         }
 }
export default Devices;
// <TestGetJson /> 