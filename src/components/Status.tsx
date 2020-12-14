import React from 'react'
import {TestFx} from './Helper'
import {getData} from './Helper'
import settingsJson from '../data/status.json'


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

class Status extends React.Component<IProps, State>{
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
            let devices: any = ''

            if (this.state.deviceView === 'defaultView'){
              devices = (<p>no settings</p>)
            } else if (this.state.deviceView.length >= 2) {
              devices= settingsJson.content.galleries[this.state.galleriId].devices.map((t: any, index: number) => (
                                            <div key={t.name+t.id} className="statusItem">
                                                <h2  className='statusHeader' > {t.name}</h2>
                                                <div className="statusStatus statusGreen">
                                                     <span >status : </span><span>OK</span>
                                                </div>
                                                <button className="btnGrey">restart</button>
                                                <span className="last">Last seen : </span><span className="last">14-12-2021 16:42</span>
                                            </div>
                                         
                  ));
               } 



             




               
           return (
             <div className="pageWrapper status">
                   
                   <div className="btn-group col1">
                   <h2>galleries</h2>  
                       {galleriColm}
                   </div>
                   <div className="btn-group colStatus">  
                   <h2>status</h2> 
                       {devices}
                   </div>
                   
                   
                   <div id="arrow1"></div>
                 
                   
             </div>    
           
           )
                
         }
 }
export default Status;
