import React from "react";
import { appContext } from "./Context";
import { useContext } from "react";
function Home(){

    const name=useContext(appContext);
    return(
   <>
    <h1>Home</h1>

<p>Welocome {name}</p>


   </>
       


    );
}
export default  Home;