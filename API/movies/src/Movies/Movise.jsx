import React, { useEffect, useState } from "react";
import axios from "axios";
function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?s=star wars&apikey=263d22d8")
      .then((respose) => {
        // console.log(respose.data.Search);
        // const res=respose.data.
        setMovies(respose.data.Search);
      });
  }, []); 

  return (
    <>
    <div className="row text-center">
        <h1 >Movies List Show On useing Fatch API</h1>
      {movies.map((movie, index) => (
        <div className="card text-center" style={{ width: "19rem" }}>
          <div className="card-body ">
            <img src={movie.Poster} className="card-img-top" alt="..." />

            <h5 className="card-title" key={index}>
              Title :{movie.Title}
            </h5>
            <p className="card-text">Type :{movie.Type}</p>
            <p className="card-text">Year : {movie.Year}</p>
            <a href="#" className="btn btn-primary ">
              Watch Now
            </a>
          </div>
        </div>
      ))}
      </div>
    </>
  );
}

export default Movies;
