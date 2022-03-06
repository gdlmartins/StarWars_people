import axios from "axios";

import {URL_BASE} from '../constants/URL_BASE'




const GetData =(who , dataUp)=> { 

  const url = `${URL_BASE}/${who}.json`
     

    axios
   .get(url)
   .then(res =>{
    dataUp(res.data)
     console.log(res.data)
    })
   .catch(err => console.log(err))

}

export default GetData;