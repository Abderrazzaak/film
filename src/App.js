import React,{useState,useEffect} from 'react';
import './App.css';
import MovieBox from '../src/src/MovieBox'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=9f4e4e0e60205b55bed11183499c5d8c";

function App() {

  const [movies, setMovies]=useState([]);
  

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    });
  }, []);
  return (
    <div className="container">
      <div className="grid">
        {movies.map((movieReq) => ( 
          <MovieBox key={movieReq.id} {...movieReq} />
          
        ))}
      </div>
    </div>
  );
}

export default App;


 