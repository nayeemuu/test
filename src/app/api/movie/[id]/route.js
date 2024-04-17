import { movies } from '@/data/dataForBackend';

export async function GET(_request, { params }) {
  const movieId = params.id;

  const targetedMovie = movies.results.find(
    (movie) => movie.id === parseInt(movieId)
  );

  if (targetedMovie) {
    return Response.json(found);
  } else {
    return Response.json({ error: `movie with this ${movieId} is not found` });
  }
}

export async function DELETE(request, { params }) {
  const movieId = params.id;

  const targetedMovie = movies.results.find(
    (movie) => movie.id === parseInt(movieId)
  );
  if (targetedMovie) {
    return Response.json({ message: `movie successfully deleted` });
  } else {
    return Response.json({ error: `movie with this ${movieId} is not found` });
  }
}

export async function PATCH(request, { params }) {
  try {
    const movieId = params.id;
    const reqBody = await request.json();

    const targetedMovie = movies.results.find(
      (movie) => movie.id === parseInt(movieId)
    );
    if (targetedMovie) {
      return Response.json({
        message: 'data update successful',
        updatedData: { ...targetedMovie, ...reqBody },
      });
    } else {
      return Response.json({
        error: `movie with this ${movieId} is not found`,
      });
    }
  } catch (error) {
    if (error.message) {
      return Response.json({ error: error.message });
    } else {
      return Response.json({ error: 'please provide valid data' });
    }
  }
}
