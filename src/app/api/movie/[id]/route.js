import { movieList } from '@/data/dataForBackend';

export async function GET(_request, { params }) {
  const movieId = params.id;

  const targetedMovie = movieList.results.find(
    (movie) => movie.id === parseInt(movieId)
  );

  if (targetedMovie) {
    return Response.json(targetedMovie);
  } else {
    return Response.json({
      error: `Movie with this id - ${movieId} is not found`,
    });
  }
}

export async function DELETE(request, { params }) {
  const movieId = params.id;

  const targetedMovie = movieList.results.find(
    (movie) => movie.id === parseInt(movieId)
  );
  if (targetedMovie) {
    return Response.json({ message: `Movie delete successful` });
  } else {
    return Response.json({
      error: `Movie with this  id - ${movieId} is not found`,
    });
  }
}

export async function PATCH(request, { params }) {
  try {
    const movieId = params.id;
    const reqBody = await request.json();

    const targetedMovie = movieList.results.find(
      (movie) => movie.id === parseInt(movieId)
    );
    if (targetedMovie) {
      return Response.json({
        message: 'Data Update Successful',
        data: { ...targetedMovie, ...reqBody },
      });
    } else {
      return Response.json({
        error: `Movie with this  id - ${movieId} is not found`,
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
