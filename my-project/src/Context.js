import React, { createContext, useEffect,useState } from "react";

const appContext=createContext();


function AppContextProvider({children}){
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState({show:false,msg:""});
   const url=`https://www.omdbapi.com/?i=tt3896198&apikey=dcf78ce6&s=titanic`
    let getdata=async(url)=>{
      try{
        
      let res=await fetch(url);
      res=await res.json();

     
      
        console.log(res.Search);
        setData(res.Search);
       
      
   
     
      }
      catch{

      }
    }




useEffect(()=>{
 getdata(url);
},[]);





    return <appContext.Provider value={data}>

{children}

    </appContext.Provider>
}

export {appContext,AppContextProvider};