import MovieDetails from '@/components/Pages/movie/MovieDetails/MovieDetails';
import Modal from '@/components/reuseable/Modal/Modal';
const getMovies = () => {
  return import('../../../../../data/data.json').then(
    (module) => module.default
  );
};

export default async function Movie({ params: { lang, movieId } }) {
  const movies = await getMovies();
  const selectedMovie = movies.find((movie) => movie.id === parseInt(movieId));

  return (
    <Modal>
      <MovieDetails movie={selectedMovie} lang={lang} />
    </Modal>
  );
}
