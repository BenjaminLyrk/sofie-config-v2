import React from 'react'

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

class Showstyle extends React.Component<IProps, State>{
  readonly state: State = initialState;

  changeStudios(i:string, name:string){

  }
 
   render(){  

           
           return (
             <div className="pageWrapper galeries">
                   
                   <div className="btn-group col1">
                   <h2>Showstyle</h2>  
                      <button className="btnBlue">sport</button>
                      <button className="btnBlue">nyh</button>
                   </div>
                   <div className="btn-group colInfo">
                   <h2 className="subtext">settings</h2>  
                       <ul>
                         <li>Graphic setup table incl. DVE folder</li>
                         <li>Skema table</li>
                         <li>Design table</li>
                         <li>Transistion table</li>
                      </ul>
                   </div>
                 
             </div>    
           
           )
                
         }
 }
export default Showstyle;
