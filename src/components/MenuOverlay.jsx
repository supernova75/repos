import { Link } from 'react-router-dom'
const MenuOverlay = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav
      className={`fixed flex flex-col top-0 justify-between left-0 w-full px-10 z-10 h-screen pt-24 bg-primary-pantone5255c transform delay-100 transition-all duration-300 ${
        navbarOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
      }`}
    >
      <ul className="w-full px-64 flex flex-col items-start  p-7">
        <li className="flex w-full leading-3 list-none focus:outline-none group tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out">
          <Link
            to="/chat"
            className="h-full w-full text-lg text-light-grey text-base text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            Chat with Assistant
          </Link>
        </li>
        <hr className="h-px my-4 h-full w-full  bg-light-grey border-0 dark:bg-light-grey opacity-35 "></hr>

        <li className="flex w-full leading-3 list-none focus:outline-none group tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out">
          <Link
            to="/about"
            className="h-full w-full  text-lg text-light-grey text-base text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            About
          </Link>
        </li>
        <hr className="h-px my-4 h-full w-full  bg-light-grey border-0 dark:bg-light-grey opacity-35 "></hr>
        <li className="flex w-full leading-3 list-none focus:outline-none group tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out ">
          <Link
            to="/instructions"
            className="h-full w-full text-lg text-light-grey text-base text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            instructions
          </Link>
        </li>
        <hr className="h-px my-4 h-full w-full  bg-light-grey border-0 dark:bg-light-grey  opacity-35"></hr>
        <li className="flex w-full leading-3 list-none focus:outline-none group tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out ">
          <Link
            to="/account"
            className="h-full w-full  text-lg text-light-grey text-base text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            Account
          </Link>
        </li>
        <hr className="h-px my-4 h-full w-full  bg-light-grey border-0 dark:bg-light-grey opacity-35 "></hr>
        <li className="flex w-full leading-3 list-none focus:outline-none group tracking-normal opacity-70 hover:opacity-100 transition-all duration-200 ease-in-out">
          <Link
            to="/account"
            className="h-full w-full text-base text-primary-pantone-032c text-xl text-center"
            onClick={() => {
              setNavbarOpen(false)
            }}
          >
            <span>
              <img
                src="../Icons/LogOut_Icon.svg"
                className=" w-7 inline mr-5"
              ></img>
              Log Out
            </span>
          </Link>
        </li>
      </ul>
      <button className="text-light-grey pb-10">اللغة العربية</button>
    </nav>
  )
}

export default MenuOverlay
