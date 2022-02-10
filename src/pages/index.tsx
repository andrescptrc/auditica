import type { NextPage } from 'next'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { ImMic } from 'react-icons/im'

const HomePage: NextPage = () => {
  return (
    <div className="ml-60 h-screen bg-eerie-black font-display">
      <div className="p-4">
        <div className="flex justify-center">
          <label className="relative block w-96 max-w-lg">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <FiSearch />
            </span>
            <input
              className="block w-full rounded-md border border-slate-300 bg-white py-2 pl-9 pr-3 shadow-sm placeholder:text-slate-400 focus:outline-none sm:text-sm"
              placeholder="Search artists, songs, albums..."
              type="text"
              name="search"
            />
            <span className="absolute inset-y-0 right-0 my-2 flex items-center border-l border-spanish-gray px-3">
              <ImMic />
            </span>
          </label>
        </div>
        <Image
          src={'/images/banner_1.png'}
          alt="Banner Image"
          className="relative"
          width={1000}
          height={450}
        />
      </div>
    </div>
  )
}

export default HomePage
