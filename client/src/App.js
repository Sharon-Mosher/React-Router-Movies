import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom'
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    let match=false;
    console.log('addsaved=',movieList[id])
    console.log('saved=',saved);
    console.log('saved.length=',saved.length);
    if (saved.length === 0){
    setSaved([...saved,movieList[id]])
    }
    else{
        (!saved.find(item=>(item.id===Number(id)))) ? setSaved([...saved,movieList[id]]) : console.log('movie already exist');
    }
  }

  return (
    <div>
      <SavedList key={saved.id} list={saved} /> 
      <Switch>
      <Route path="/movies/:movieId">
      <Movie movies={movieList}
       addToSavedList={addToSavedList}/>
      </Route> 
      <Route exact path='/'>
        <MovieList  movies={movieList}/>
      </Route>
      </Switch>
    </div>
  );
};

export default App;