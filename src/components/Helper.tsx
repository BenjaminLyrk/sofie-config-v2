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


export function createInfoItems (param: string) {
        let result:any = []
        let opt:any = []
        let i:number = 0
        //create multichoice, #MC#first option;second option;third option....
        if(param.includes("#MC#", 0) ){
         let t = param.substring(4).split(';')
          
          for (i = 0; i < t.length; i++) {
            opt.push(<option>{t[i]}</option>)
          }
          result.push(<select >{opt}</select>);
        } else {
          result.push(param)
        }
    return result  
 
}