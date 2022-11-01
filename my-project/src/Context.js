import React, { createContext } from "react";

const appContext=createContext();


function AppContextProvider({children}){
    return <appContext.Provider value="Gandhi">

{children}

    </appContext.Provider>
}

export {appContext,AppContextProvider};