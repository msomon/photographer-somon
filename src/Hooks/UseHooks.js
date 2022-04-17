import { useEffect, useState } from "react";

const useHooks = () => {
  const [bundles,setBundle]=useState([]);
  useEffect(()=>{
    fetch('photographer.json')
    .then(res=>res.json())
    .then(data=>setBundle(data))
  },[] )
 return {bundles,setBundle}
  
};

export default useHooks;