import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const MovieList = props => {
  const { movies } = props;  
  const { url } = useRouteMatch();

  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={'movies/${movies.id}'}>
        <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
