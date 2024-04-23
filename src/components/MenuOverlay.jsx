import { Link } from 'react-router-dom'
const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-primary-pantone5255c transform delay-100 transition-all duration-300 ${
        navbarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <ul className="w-full flex flex-col items-start p-7">
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out">
          <Link
            to="/chat"
            className="h-full w-full py-2 text-lg text-light-grey text-xl text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            Chat with Assistant
          </Link>
        </li>
        <hr className="h-px my-8 h-full w-full  bg-light-grey border-0 dark:bg-light-grey  opacity-70 "></hr>

        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out">
          <Link
            to="/about"
            className="h-full w-full py-2 text-lg text-light-grey text-xl text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            About
          </Link>
        </li>
        <hr className="h-px my-8 h-full w-full  bg-light-grey border-0 dark:bg-light-grey  opacity-70 "></hr>
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out ">
          <Link
            to="/instructions"
            className="h-full w-full py-2 text-lg text-light-grey text-xl text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            instructions
          </Link>
        </li>
        <hr className="h-px my-8 h-full w-full  bg-light-grey border-0 dark:bg-light-grey  opacity-70 "></hr>
        <li className="flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out ">
          <Link
            to="/account"
            className="h-full w-full py-2 text-lg text-light-grey text-xl text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuOverlay
