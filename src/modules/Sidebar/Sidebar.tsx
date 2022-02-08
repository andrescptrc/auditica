import Image from 'next/image'

const Sidebar = () => {
  return (
    <aside className="bg-raisin-black fixed w-56 p-2">
      <Image
        src={'/images/auditica-logo.svg'}
        alt="Auditica Logo"
        className="relative"
        width={100}
        height={35}
      />
      <h1>hi</h1>
    </aside>
  )
}

export default Sidebar
