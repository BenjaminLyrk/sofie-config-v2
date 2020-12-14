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
                   
                  
                   <h2>Backup page</h2>  
                    
                 
             </div>    
           
           )
                
         }
 }
export default Backup;
