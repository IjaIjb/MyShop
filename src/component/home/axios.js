
import axios from 'axios';

export function GetData(path){
   
    axios.get(`https://fakestoreapi.com/${path}`)
    .then((response) => {
         console.log(response?.data);
    })
;
}
