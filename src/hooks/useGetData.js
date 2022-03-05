import React, { useEffect } from "react";
import axios from "axios";

import {URL_BASE} from '../constants/URL_BASE'




const useGetData =(who)=> { 

  const url = `${URL_BASE}/${who}.json`

  const [characters, setCharacters] = React.useState([]);
     

  useEffect(()=> {
    axios
   .get(url)
   .then(res =>{
     setCharacters(res.data)
     console.log(res.data)
    })
   .catch(err => console.log(err))

  }, [] )

 


   

 return (characters)
}

export default useGetData;