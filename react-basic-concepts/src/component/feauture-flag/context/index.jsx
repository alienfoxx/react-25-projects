import { createContext, useEffect, useState } from "react";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
    const [loading,setLoading] = useState(false);
    const [enableFlags,setEnabelFlags] = useState(null)

    async function fetchFeatureFlags(){
        try{
           
        }catch(error){
            console.log(error);
            throw new Error(error)
        }
    }



    useEffect(()=>{

        fetchFeatureFlags();

    },[])
  return (
    <FeatureFlagContext.Provider value={{}}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
