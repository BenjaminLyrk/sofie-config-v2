import React from 'react'
import settingsJson from '../data/gui.json'


interface IProps {

}

//define state
const initialState ={
  guiActive: ''
}

//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Gui extends React.Component<IProps, State>{
  readonly state: State = initialState;
  
  changeGui(i:string, name: string){

  }
 
   render(){  
             
           
        //gui column
        const gui = settingsJson.content.gui.map((items: any, index: Number) => ( 
          <button 
            key={items.name+items.id} 
            className={this.state.guiActive === items.name ? 'btnCyan active' : 'btnCyan'} 
            value={items.id} 
            onClick={() => this.changeGui('s'+index, items.name)} 
            >
            {items.name}
          </button>
          ))
       
       return (
         <div className="pageWrapper gui">
               
               <div className="btn-group col1">
               <h2>gui</h2>  
                   {gui}
               </div>
               <div className="btn-group col1">
               <h2>area</h2>
                   <button className="btnGreen">settings</button>   
                   <button className="btnGreen">keyboard shortcuts</button>
                   <button className="btnGreen">shelf</button>
               </div>
             
         </div>    
       
       )
                
         }
 }
export default Gui;
