import './globals.css';
import './app.css';
export const metadata = {
  title: 'Cine Rental | Learn with Sumit',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        {children}
      </body>
    </html>
  );
}
