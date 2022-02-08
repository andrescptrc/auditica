import Image from 'next/image'

import { HiHome, HiGlobe, HiHeart, HiMusicNote } from 'react-icons/hi'

const Sidebar = () => {
  return (
    <aside className="bg-raisin-black fixed w-56 py-2 px-4">
      <Image
        src={'/images/auditica-logo.svg'}
        alt="Auditica Logo"
        className="relative"
        width={100}
        height={35}
      />

      <nav className="mt-6">
        <ul className="text-white text-sm">
          <li className="flex font-bold items-center p-2 bg-red-salsa rounded mb-2">
            <HiHome className="mr-1 w-4" />
            <p>Home</p>
          </li>
          <li className="flex font-medium items-center p-2 rounded mb-2">
            <HiGlobe className="mr-1 w-4" />
            <p>Browse</p>
          </li>
          <li className="flex font-medium items-center p-2 rounded mb-2">
            <HiHeart className="mr-1 w-4" />
            <p>Favorite</p>
          </li>
          <li className="flex font-medium items-center p-2 rounded">
            <HiMusicNote className="mr-1 w-4" />
            <p>Library</p>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
