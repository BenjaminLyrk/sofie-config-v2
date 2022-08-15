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

class ShowstyleVariant extends React.Component<IProps, State>{
  readonly state: State = initialState;

  changeStudios(i:string, name:string){

  }
 
   render(){  

           
           return (
             <div className="pageWrapper galeries">
                   
                   <div className="btn-group col1">
                   <h2>Showstyle Variant</h2>  
                      <button className="btnBlue">Sportsnyheder</button>
                      <button className="btnBlue">NBA</button>
                      <button className="btnBlue">Tennis</button>
                   </div>
                   <div className="btn-group colInfo">
                   <h2 className="subtext">Settings</h2>  
                   <ul>
                         <li>Graphic setup incl. DVE</li>
                         <li>Default skema</li>
                         <li>Default style</li>
                         <li>Default wipe</li>
                         <li>Default audiobed</li>
                         <li>Action triggers override</li>
                       </ul>
                   </div>
                 
             </div>    
           
           )
                
         }
 }
export default ShowstyleVariant;
