import Image from 'next/image'

import {
  HiHome,
  HiGlobe,
  HiHeart,
  HiMusicNote,
  HiOutlineHome,
  HiOutlinePlusCircle
} from 'react-icons/hi'

import { BiBarChart } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <aside className="fixed h-screen w-60 bg-raisin-black py-2 px-4 drop-shadow">
      <Image
        src={'/images/auditica-logo.svg'}
        alt="Auditica Logo"
        className="relative"
        width={100}
        height={35}
      />

      <nav className="mt-6">
        <ul className="space-y-2 text-sm font-medium text-white">
          <li className="flex cursor-pointer items-center rounded bg-red-salsa p-2 font-bold transition-all hover:bg-red-salsa">
            <HiHome className="mr-1 w-4" />
            <p>Home</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:bg-red-salsa">
            <HiGlobe className="mr-1 w-4" />
            <p>Browse</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:bg-red-salsa">
            <HiHeart className="mr-1 w-4" />
            <p>Favorite</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:bg-red-salsa">
            <HiMusicNote className="mr-1 w-4" />
            <p>Library</p>
          </li>
        </ul>
      </nav>

      <nav className="mt-6">
        <ul className="text-sm font-medium text-spanish-gray">
          <li className="flex cursor-pointer items-center justify-between rounded p-2 text-space-cadet transition-all hover:text-space-cadet-light">
            <div className="flex items-center">
              <HiOutlineHome className="mr-1 w-4" />
              <p>Home</p>
            </div>
            <HiOutlinePlusCircle className="text-2xl text-white" />
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 text-red-salsa-light transition-all">
            <p className="mr-2">For workplace</p>

            <BiBarChart className="text-xl" />
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:text-red-salsa-light">
            <p>Rich Brian’s collections</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:text-red-salsa-light">
            <p>deep focus</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:text-red-salsa-light">
            <p>Lo-Fi Jazz upbeat</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:text-red-salsa-light">
            <p>For workplace</p>
          </li>
          <li className="flex cursor-pointer items-center rounded p-2 transition-all hover:text-red-salsa-light">
            <p>Christmas playlist</p>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
