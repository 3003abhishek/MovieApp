import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from "./Home"
import Movies from "./Movies.js"
import Singlemovie from "./Singlemovie"

function App() {
  return (
    <div className="App">
     
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/movies' element={<Movies/>}/>
   <Route path='/singlemovie/:id' element={<Singlemovie/>}/>
  
   




    </Routes>



    </div>
  );
}

export default App;
