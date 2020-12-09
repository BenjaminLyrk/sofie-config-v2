import React from 'react';
import galleriItems from '../data/galleries.json';
import MakeButton from './MakeButton';



let devices: string[] = ['visionmixer', 'audiomixer', 'NCRS']; 

function Status() {
    let btnClass: string = 'btnGreen';
    return (
       <div className="pageWrapper status">
           <div className="btn-group col1">  
           {galleriItems.content.galleries.map((items, index) => ( 
            <MakeButton
                btnText   = {items.name}
                btnClass  = {btnClass}
                btnValue  = {items.id}
              
            />
            ))}
            </div>
            <div className="btn-group col2">
                {devices.map(i => (
                        <MakeButton
                        btnText   = {i}
                        btnClass  = {'btnBlue'}
                        btnValue  = {i}
                    />
                ))}
            </div>
          </div>
    );
}
 
export default Status;


