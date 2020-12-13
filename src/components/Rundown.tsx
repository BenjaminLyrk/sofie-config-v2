import React from 'react';
import { NavLink } from 'react-router-dom';

interface SettingVars {

}


const Rundown =(props: SettingVars): any => {
    return (
        <>
        <div className="topmenu">
            <NavLink exact to="/" className="btn"> MAIN PAGE</NavLink>
            <select> 
                <option>CHOOSE RUNDOWN</option>
            </select>
            <select> 
                <option>CHOOSE SHOW TYPE</option>
            </select>
           
        </div>
        <div className="rundown">
            <div id="rd">lk</div>
        </div>
        </>
    )
}
export default Rundown