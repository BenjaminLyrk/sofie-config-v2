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

class Shows extends React.Component<IProps, State>{
  readonly state: State = initialState;

  changeStudios(i:string, name:string){

  }
 
   render(){  

           
           return (
             <div className="pageWrapper galeries">
                   
                   <div className="btn-group col1">
                   <h2>Shows</h2>  
                      <button className="btnBlue">sport</button>
                      <button className="btnBlue">nyh</button>
                   </div>
                   <div className="btn-group colInfo">
                   <h2>settings</h2>  
                       <ul>
                         <li> shows changes which parts to use</li>
                         <li>keyboard shorcuts ?</li>
                         <li>which parts presets to use</li>
                         <li>which gui layouts u can choose from</li>
                         <li>dve layouts</li>
                         <li></li>
                         
                         
                       </ul>
                   </div>
                 
             </div>    
           
           )
                
         }
 }
export default Shows;
