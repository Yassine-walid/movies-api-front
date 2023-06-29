import { dark } from '@mui/material/styles/createPalette';
import './App.css';
import api from './api/axiosConfig'
import { useEffect,useState } from "react";
import { Routes,Route } from "react-router-dom";
import Layout from './Components/Layout';
import Home from './Home/Home';
import Header from './Components/Header/Header';
import Trailer from './Components/Trailer/Trailer';

function App() {
  

  const [movies,setMovies] = useState();

  const getMovies = async () =>{
    try {

      const response = await api.get("/movies")
      setMovies(response.data)

    } catch (error) {
      console.log(error)
    }
    
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
