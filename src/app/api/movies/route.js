import { movies } from '@/data/dataForBackend';

export async function GET() {
  return Response.json(movies.results);
}
