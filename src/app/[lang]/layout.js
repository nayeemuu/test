import Navbar from '@/components/reuseable/Navbar/Navbar';

export default function RootLayout({ children, modal }) {
  return (
    <div>
      <Navbar />
      {modal}
      {children}
    </div>
  );
}
