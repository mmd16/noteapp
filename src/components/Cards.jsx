import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineEdit } from "react-icons/md";


const Cards = ({ title, content, type, id}) => {
  const router = useRouter();
  return (
    <div className="min-w-md max-w-lg rounded overflow-hidden shadow-md">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex justify-between">
          <div>{title}</div>
          <div className='ml-10'><button onClick={() => router.push(`/notes/modify-note?id=${id}`)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-2 py-2 me-2 mb-2 focus:outline-none"><MdOutlineEdit /></button></div>
        </div>
        <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${type}`}</span>
      </div>
    </div>
  )
}

export default Cards

