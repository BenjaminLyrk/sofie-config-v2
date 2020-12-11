import settingsJson from '../data/galleries.json'


//Helper functions
export function TestFx (value: any) {
    return (
      console.log('start of Helper: ' + value)
    )
}
 
//create object from Json request

let obj: any; 

//output example
// obj = {
//   "data": [
//     {
//       "param": "4000",
//       "value": "AFV-D"
//     }
//   ]
// }
export function getData (type: string) {

  switch (type){
    case 'galleries':
      obj = settingsJson.content.galleries.map((items: any, index: Number) => ( 
              {param: items.id, value: items.name}
            ))
          break;
  }
console.log(obj)
     return(obj) 

}
