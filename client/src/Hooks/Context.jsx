import { createContext, useContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({children})=>{

    const [show, isShow] = useState(false);
    const navToggle = () => {
      isShow(!show);
    };
    return(
        <appContext.Provider value={{show, navToggle}}>
            {children}
        </appContext.Provider>
    )
}

const useGlobalHook = ()=> useContext(appContext);

export {AppProvider, useGlobalHook}