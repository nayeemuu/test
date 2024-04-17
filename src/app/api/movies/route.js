import { movieList } from '@/data/dataForBackend';

export async function GET() {
  return Response.json(movieList.results);
}
