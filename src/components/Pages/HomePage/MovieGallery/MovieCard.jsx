import Image from 'next/image';
import Link from 'next/link';

import star from '../../../../../public/assets/star.svg';
import tag from '../../../../../public/assets/tag.svg';
import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries';

const MovieCard = async ({ lang, movie }) => {
  const dict = await getDictionary(lang);
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <div className="relative w-full aspect-[316/381]">
        <Image
          className="w-full h-auto object-cover"
          src={movie.poster_path}
          alt=""
          fill
        />
      </div>
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{movie.original_title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
        <div className="flex items-center space-x-1 mb-5">
          <Image src={star} width="14" height="14" alt="" />
          <Image src={star} width="14" height="14" alt="" />
          <Image src={star} width="14" height="14" alt="" />
          <Image src={star} width="14" height="14" alt="" />
          <Image src={star} width="14" height="14" alt="" />
        </div>

        <Link
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href={`movies/${movie.id}`}
        >
          <Image src={tag} alt="" />
          <span>{dict.movieCard.details}</span>
        </Link>
      </figcaption>
    </figure>
  );
};

export default MovieCard;
