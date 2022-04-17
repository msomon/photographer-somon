import { useEffect, useState } from "react";

const useHooks = () => {
  const [bundles,setBundles]=useState([]);
  useEffect(()=>{
    fetch('photographer.json')
    .then(res=>res.json())
    .then(data=>setBundles(data))
  },[] )
 return {bundles,setBundles}
  
};

export default useHooks;