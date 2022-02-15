import type { NextPage } from 'next'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { ImMic } from 'react-icons/im'

const HomePage: NextPage = () => {
  console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
  return (
    <div className="ml-60 h-screen bg-eerie-black font-display">
      <div className="p-8">
        <div className="relative w-fit">
          <div className="absolute inset-x-0 top-2 z-10 flex justify-center">
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
          <ul className="absolute bottom-0 left-0 z-10 space-y-1 pl-5 pb-10">
            <li>
              <p className="text-xs text-spanish-gray-dark">R&B</p>
            </li>
            <li>
              <p className="text-lg font-bold text-raisin-black">Pop</p>
            </li>
            <li>
              <p className="text-xs text-spanish-gray-dark">Rap</p>
            </li>
            <li>
              <p className="text-xs text-spanish-gray-dark">Balad</p>
            </li>
            <li>
              <p className="text-xs text-spanish-gray-dark">Country</p>
            </li>
            <li>
              <p className="text-xs text-spanish-gray-dark">Hip Hop</p>
            </li>
          </ul>
          <Image
            src={'/images/banner_1.png'}
            alt="Banner Image"
            width={800}
            height={350}
          />
          <div className="z-1 absolute bottom-0 h-44 w-full bg-gradient-to-t from-black" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
