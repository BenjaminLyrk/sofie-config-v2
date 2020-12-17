import React from 'react'


interface IProps {

}

//define state
const initialState ={
}

//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Backup extends React.Component<IProps, State>{
  readonly state: State = initialState;

 
   render(){  
             
           
           return (
             <div className="pageWrapper backup">
                   
               <div className="btn-group col1">
                    <h2>Database</h2>  
                    <button className="btnGrey">backup </button>
                    <button className="btnGrey">Export </button>
                    <button className="btnGrey">Upload </button>
              </div> 
              <div className="btn-group col2">
                    <h2>sofie settings</h2>  
                    <button className="btnGrey">backup </button>
                    <button className="btnGrey">Export </button>
                    <button className="btnGrey">Upload </button>
              </div> 
              <div className="btn-group colInfo">
                <ul>
                  <li>backup parts of config (Trio export style)</li>
                  <li>import parts of config (Trio import style)</li>
                  
                </ul>
                </div>    
             </div>    
           
           )
                
         }
 }
export default Backup;
