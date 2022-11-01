import React from "react";
import {useParams} from "react-router-dom";
function Singlemovie(){


    const {id}=useParams();
    return(
   <> <h1>Singlemovie</h1>
   <h1>{id}</h1>
</>
      


    );
}
export default  Singlemovie;