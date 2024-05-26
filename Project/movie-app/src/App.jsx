import React from "react";

import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import MovieList from "./Components/MovieList";
import MovieListHeading from "./Components/MovieListHeading";
import SearchBox from "./Components/SearchBox";
import AddFavourites from "./Components/AddToFavourites";
import RemoveFavourites from './Components/RemoveFavourites';
function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const getMoviseRequrest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=star wars&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  
  
  useEffect(() => {
    getMoviseRequrest(searchValue);
  }, [searchValue]);


// useEffect(()=>{
// 		const movieFavourites =JSON.parse(
// 			localStorage.getItem('react-movie-app-favourites')
// 		);
// 		setFavourites(movieFavourites)
// },[])

	// const saveToLocalStorage =(items)=>{
	// 	localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
	// }

  const addFavouriteMovie = (movie) => {
	const newFavouriteList = [...favourites, movie];
	setFavourites(newFavouriteList);
	// saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie=(movie)=>{
	const newFavouriteList =favourites.filter(
		(favourite)=>favourite.imdbID !== movie.imdbID)
		setFavourites(newFavouriteList);
		// saveToLocalStorage(newFavouriteList)
	}

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center my-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favouriteComponent={AddFavourites}
          handleFavouritesClick={addFavouriteMovie}
		/>
      </div>
      <div className="row d-flex aling-item-center mt-4 mb-4">
		<MovieListHeading heading="Favourites"/>
	  </div>
	  <div className="row">
		<MovieList 
		movies={favourites}
		handleFavouritesClick={removeFavouriteMovie}
		 favouriteComponent={RemoveFavourites}/>
	  </div>
    </div>
  );
}
export default App;
