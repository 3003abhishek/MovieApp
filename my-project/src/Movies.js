import React from "react";
import './App.css';
import { useContext } from "react";
import { appContext } from "./Context";
function Movies(){
  

    const moviesdata=useContext(appContext);
  console.log("data:",moviesdata);

    return(
        <div className="container">
      
        
        
           
              <div className="container">

                {
           moviesdata.map((el)=>{

               return (
               <div  className="box">
               <h2>{el.Title}</h2>
              <img src={el.Poster}/>
              

               
               </div>

             
               )
           })
        }
         </div>
            

         </div>
        

    );
}
export default  Movies;