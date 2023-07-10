import {createContext, useContext, useState} from "react";
import axios from "axios";

const appContext = createContext(undefined);

// eslint-disable-next-line react/prop-types
const AppProvider = ({children}) => {

    const api = import.meta.env.VITE_API_URL;


    // ---------------------------------------- Navbar toggle coding part ----------------------------------->

    const [show, isShow] = useState(false);
    const navToggle = () => {
        isShow(!show);
    };

    // --------------------------------------- End toggle part -------------------------------------------->

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false)
    const [projectData,setProjectsData] = useState([])
    const getApiData = async (url, setFunc) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const res = await axios.get(url);
            res.data ? setIsLoading(false) : setIsLoading(true)
            res.data.success.length ? setFunc(res.data.success) : setIsError(true);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <appContext.Provider value={{show, navToggle,isLoading,isError,getApiData,api,projectData,setProjectsData}}>
            {children}
        </appContext.Provider>
    )
}

const useGlobalHook = () => useContext(appContext);

// eslint-disable-next-line react-refresh/only-export-components
export {AppProvider, useGlobalHook}