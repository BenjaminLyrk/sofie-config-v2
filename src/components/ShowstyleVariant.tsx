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
                   <h2>settings</h2>  
                   <ul>
                         <li>
                         Style only changes the look</li>
                         <li>color on viz overlay</li>
                         <li>dve style (background and color</li>
                         <li>default wipe, mix ec.</li>
                         <li>styles can change while running Sofie</li>
                         
                         
                       </ul>
                   </div>
                 
             </div>    
           
           )
                
         }
 }
export default ShowstyleVariant;
