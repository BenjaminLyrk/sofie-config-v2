import React from 'react';
import JsonData from '../data/galleries.json';


function TestGetJson() {
    const petList = Object.entries(JsonData.content.galleries[0].devices[0].param[0]).map(([key, value]) => {
        return (
            <div>{key} : {value.toString()}</div>
        );
    })
    return (
        <div>
            <h1>test</h1>
            {petList}


        </div>
    )
}
export default TestGetJson