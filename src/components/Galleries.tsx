import React from 'react'
import settingsJson from '../data/galleries.json'


interface IProps {

}

//define state
const initialState ={
  text: 'settings',
  deviceView: 'defaultView',
  galleriId: 0,
  galActive: ''
}

//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Galleries extends React.Component<IProps, State>{
  readonly state: State = initialState;

  changeGalleries(i:string, name:string){

  }
 
   render(){  
             
             //galleries column
             const galleriColm = settingsJson.content.galleries.map((items: any, index: Number) => ( 
              <button 
                key={items.name+items.id} 
                className={this.state.galActive === items.name ? 'btnBlue active' : 'btnBlue'} 
                value={items.id} 
                onClick={() => this.changeGalleries('s'+index, items.name)} 
                >
                {items.name}
              </button>
              ))
           
           return (
             <div className="pageWrapper galeries">
                   
                   <div className="btn-group col1">
                   <h2>galleries</h2>  
                       {galleriColm}
                   </div>
                   <div className="btn-group colInfo">
                   <h2>settings</h2>  
                   <ul>
                         <li>which sofie server</li>
                       </ul>
                 </div>
             </div>    
           
           )
                
         }
 }
export default Galleries;
