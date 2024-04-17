import React from 'react';
import MovieCard from './MovieCard';

const getMovies = async () => {
  return import('../../../../data/data').then((module) => module.default);
};

const MovieGallery = async ({ lang }) => {
  const movies = await getMovies();
  // console.log('movies = ', movies);

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} lang={lang} />
      ))}
    </div>
  );
};

export default MovieGallery;
