import React from 'react'
import {TestFx} from './Helper'
import {getData} from './Helper'
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
            TestFx('value')  //importet function from Helper 
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

            if (this.state.deviceView === 'defaultView'){
              deviceColm = (<p>no settings</p>)
            } else if (this.state.deviceView.length >= 2) {
              deviceColm = settingsJson.content.galleries[this.state.galleriId].devices.map((t: any, index: number) => (
                                            <button 
                                            key={t.name+t.id} 
                                            className={this.state.devActive === t.name ? 'btnGreen active' : 'btnGreen'} 
                                            value={t.id} 
                                            onClick={() => this.changeArea('i'+index, t.name)}>
                                              {t.name}
                                            </button>
                                         
                  ));
               } else {
                 deviceColm = (<p>no settings</p>)
               }



               //area column
               let areaColm: any = ''
               if (this.state.areaView === 'defaultView'){
                areaColm = (<p>no folders</p>)
              } else if (this.state.areaView.length >= 2) {
                                      areaColm = settingsJson.content.galleries[this.state.galleriId].devices[this.state.deviceId].area.map((t:any, index: number) => (
                                        <button 
                                            key={t.name+index} 
                                            className={this.state.areaActive === t.name ? 'btnCyan active' : 'btnCyan'} 
                                            value={t.name} 
                                            onClick={() => this.changeinfo('i'+index, t.name)}>
                                              {t.name}
                                            </button>
                                           
                                           
                                    
                      ))
                      
              } else {
                areaColm = (<p>no data</p>)
              } 




               //infoColm
               let infoColm: any = ''
               if (this.state.infoView === 'defaultView'){
                 infoColm = (<p>no settings</p>)
               } else if (this.state.infoView.length >= 2) {
                 infoColm = settingsJson.content.galleries[this.state.galleriId].devices[this.state.deviceId].area[this.state.areaId].param.map((t: any, index:number) => {
                                                
                                                      return (
                                                      
                                                       <div key={t._id}>
                                                           <div className={t.divider.length > 0 ? 'no' : 'hideValue '} >{t.divider}</div>
                                                           <div className="hideValue">{t._id}</div>
                                                           <div className="infoKey"
                                                              onMouseOver={() => this.handleBoxToggle(t.name)}
                                                              onMouseOut={() => this.handleBoxToggle(t.name)}
                                                           >{t.name}</div>
                                                           <div className="infoValue">{t.value}</div>
                                                           <div className={this.state.overMe === t.name ? 'help show' : 'help hide'} 
                                                                >
                                                                {t.blueprint}
                                                            </div>   


                                                       </div>
                                                       )
                                                   
                                             })
                                          
             } else {
                 infoColm = (<p>no settings</p>)
               }
           return (
             <div className="pageWrapper status">
                   
                   <div className="btn-group col1">
                   <h2>galleries</h2>  
                       {galleriColm}
                   </div>
                   <div className="btn-group col2">  
                   <h2>devices</h2> 
                       {deviceColm}
                   </div>
                   <div className="btn-group col3"> 
                   <h2>area</h2>  
                       {areaColm}
                   </div>
                   <div className="btn-group colInfo"> 
                   <h2>settings</h2> 
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