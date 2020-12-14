import React from 'react'


interface IProps {

}

//define state
const initialState ={
}

//define the type of state (types mus start with capital)
type State = Readonly<typeof initialState>

class Parts extends React.Component<IProps, State>{
  readonly state: State = initialState;

 
   render(){  
             
           
           return (
             <div className="pageWrapper parts">
                   
                  
                   <h2>Setup parts</h2>  
                    
                 
             </div>    
           
           )
                
         }
 }
export default Parts;
