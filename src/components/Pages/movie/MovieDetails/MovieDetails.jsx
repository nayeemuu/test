import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';
import Image from 'next/image';

async function MovieDetails({ lang, movie }) {
  const dict = await getDictionary(lang);
  return (
    <div>
      <div className="relative w-full h-full max-h-[300px] lg:max-h-[500px] aspect-[7/3]">
        <Image className="object-cover" src={movie.backdrop_path} alt="" fill />
      </div>

      <div className="grid grid-cols-12 py-12 gap-8">
        <div className="col-span-2 relative w-full aspect-[3/5]">
          <Image src={movie.poster_path} alt="" fill />
        </div>
        <div className="col-span-8">
          <h2 className="font-bold text-slate-300 text-2xl">
            {movie.original_title}
          </h2>
          <p className="my-2 text-slate-400 italic">{movie.overview}</p>
          <ul className="text-slate-300 space-y-2 my-8">
            <li>
              {dict.movieDetails.releaseDate} : {movie.release_date}
            </li>
            <li>
              {dict.movieDetails.averageVote} : {movie.vote_average}
            </li>
            <li>
              {dict.movieDetails.voteCount} : {movie.vote_count}
            </li>
            <li>
              {dict.movieDetails.popularity} : {movie.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.movieDetails.streamInHD}
          </button>
          <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
            {dict.movieDetails.downloadInHD}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
