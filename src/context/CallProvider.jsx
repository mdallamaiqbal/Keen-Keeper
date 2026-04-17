import { useState } from "react";
import { CallContext } from "./CallContext";


const CallProvider = ({children}) => {
     const [call,setCall]=useState([]);
     const data={
        call,setCall
     }
    return <CallContext.Provider value={data}>{children}</CallContext.Provider>
};

export default CallProvider;