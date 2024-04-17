import MovieGallery from '@/components/Pages/HomePage/MovieGallery/MovieGallery';
import Footer from '@/components/reuseable/Footer/Footer';
import Sidebar from '@/components/reuseable/Sidebar/Sidebar';
import Image from 'next/image';

export default function Home({ params: { lang } }) {
  return (
    <div>
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar lang={lang} />
        <div>
          <MovieGallery lang={lang} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
