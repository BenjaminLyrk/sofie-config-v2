import React from 'react'
import settingsJson from '../data/studios.json'


interface IProps {

}

//define state
const initialState ={
  text: 'settings',
 studioId: 0,
  stuActive: ''
}

//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Studios extends React.Component<IProps, State>{
  readonly state: State = initialState;

  changeStudios(i:string, name:string){

  }
 
   render(){  
             
             //studios column
             const studios = settingsJson.content.studios.map((items: any, index: Number) => ( 
              <button 
                key={items.name+items.id} 
                className={this.state.stuActive === items.name ? 'btnGreen active' : 'btnGreen'} 
                value={items.id} 
                onClick={() => this.changeStudios('s'+index, items.name)} 
                >
                {items.name}
              </button>
              ))
           
           return (
             <div className="pageWrapper galeries">
                   
                   <div className="btn-group col1">
                   <h2>Studios</h2>  
                       {studios}
                   </div>
                   <div className="btn-group colInfo">
                   <h2>settings</h2>  
                       <ul>
                         <li>number of kameras</li>
                         <li>change inputs in vmx (vsm)</li>
                         <li>number of host mics</li>
                         <li>number of guests</li>
                         <li>video/audio sends to the studio</li>
                         <li>robotic system</li>
                         <li>wall graphic system</li>
                         <li>AR system</li>
                       </ul>
                   </div>
                 
             </div>    
           
           )
                
         }
 }
export default Studios;
