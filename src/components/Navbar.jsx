'use client'
import { BookOpenIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Navbar = () => {

  return (
    <div className='shadow-md w-full fixed top-0 left-0 mb-5'>
      <div className='flex items-center justify-between bg-white py-4 px-10'>
        <Link href="/notes">
          <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
            <BookOpenIcon className='w-7 h-7 text-blue-600' />
            <span>CP7 Notes</span>
          </div>
        </Link>
        <ul className={`flex`}>
          <Link href="/notes/create-note"><button className='btn bg-blue-600 text-white font-semibold px-3 py-1 my-4 ml-5 rounded duration-500'>Create New Notes</button></Link>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Navbar;