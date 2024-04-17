'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function NotFound({ params }) {
  const pathname = usePathname();
  const segmentArray = pathname.split('/');

  return (
    <div>
      <p>
        {`This movie with `}
        <span style={{ color: 'red' }}>{`"${
          segmentArray[segmentArray.length - 1]
        }"`}</span>
        {` id was not found!`}
      </p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
