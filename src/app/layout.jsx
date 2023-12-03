import '@/app/global.css';
import Navbar from "@/components/Navbar";
import { quicksand } from '@/app/font.js';
import { StateProvider } from '@/context/State';

export const metadata = {
  title: {
    default: 'Notes',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-white flex flex-col px-4 py-2 min-h-screen ${quicksand.className}`}>
        <StateProvider>
          <header className='mb-32'>
            <Navbar />
          </header>
          <main className="grow py-3 shadow-md ">
            {children}
          </main>
          <footer className="border-t py-3 text-center text-xs">
            CP7 notes
          </footer>
        </StateProvider>
      </body>
    </html>
  );
}