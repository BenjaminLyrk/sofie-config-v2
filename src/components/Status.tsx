import React from 'react'
import './Status.css';
import settingsJson from '../data/status.json'


interface IProps {

}

//define state
const initialState ={
  text: 'settings',
  deviceView: 'AFV D',
  deviceId: 0,
  galleriId: 0,
  areaId: 0,
  galActive: 'AFV D',
  devActive: '',
  date: new Date()
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
            let devices: any = ''
            const dateOptions: any = {  year: 'numeric', month: 'long', day: 'numeric' }
            const timeOptions: any = {   hour12: false }
            const rightNow = this.state.date.toLocaleDateString('da-DK',dateOptions) + ' ' + this.state.date.toLocaleTimeString('da-DK',timeOptions)
              if (this.state.deviceView === 'defaultView'){
              devices = (<p>no settings</p>)
            } else if (this.state.deviceView.length >= 2) {
              devices= settingsJson.content.galleries[this.state.galleriId].devices.map((t: any, index: number) => (
                                            <div key={t.name+t.id} className="statusItem">
                                                <h2  className='statusHeader' > {t.name}</h2>
                                                <div className={t.status ===  'ok' ? 'statusStatus statusGreen' : 'statusStatus statusRed'}>
                                                     <span >status : </span><span>{t.status}</span>
                                                </div>
                                                <button className="btnGrey ">restart</button>
                                                <button className="btnGrey ">Disable</button>
                                                <div className="last">Last seen : </div><div className="last">
                                                    {t.status ===  'ok' ? rightNow : t.last_seen}
                                                      
                                                </div>
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
