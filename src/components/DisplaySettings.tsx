import React from 'react';

//if manu var use interface (only in Typescipt) - must be capital
//types for props
//? after name then no type needed
interface SettingVars {
    name: string;
    param: string; 
}


const DisplaySettings =(props: SettingVars): any => {
    return (
        <div className="settingsDiv">
            <div className="col2">{props.name}</div>
            <div className="col3">{props.param}</div>
        </div>
    )
}
export default DisplaySettings