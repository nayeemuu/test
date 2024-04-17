import MovieDetails from '@/components/Pages/movie/MovieDetails/MovieDetails';
import Sidebar from '@/components/reuseable/Sidebar/Sidebar';
import { notFound } from 'next/navigation';
const getMovies = () => {
  return import('../../../../data/data').then((module) => module.default);
};

export default async function Movie({ params: { lang, movieId } }) {
  // console.log('movieId = ', movieId);
  const movies = await getMovies();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));
  if (!selectedMovie) {
    notFound();
  }

  // console.log('selectedMovie = ', selectedMovie);
  return (
    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
      <Sidebar lang={lang} />
      <MovieDetails movie={selectedMovie} lang={lang} />
    </div>
  );
}
