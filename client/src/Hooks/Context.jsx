import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({children})=>{

    const [show, isShow] = useState(false);
    const navtoggle = () => {
      isShow(!show);
    };
    return(
        <appContext.Provider value={{show, navtoggle}}>
            {children}
        </appContext.Provider>
    )
}

const useGlobalHook = ()=> useContext(appContext);

export {AppProvider, useGlobalHook}