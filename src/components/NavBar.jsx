const NavBar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <header className="w-full fixed sticky top-0 z-50 left-0 pt-2 pb-2 pr-10 pl-10 h-28 flex bg-primary-pantone5255c">
      <div className="text-light-grey flex-grow z-50">
        <img src="../Logos/Tamkeen_dual_rgb-02.svg" className=" h-full" />
      </div>
      <div className=" flex items-center justify-center z-50">
        <button
          className=" lg flex top-0 right-3 z-50 relative w-11 h-11 text-light-grey focus:outline-none"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 bg-light-grey  transform transition duration-300 ease-in-out ${
                navbarOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-light-grey transform transition-all duration-200 ease-in-out ${
                navbarOpen ? 'w-0 opacity-50' : 'w-5 delay-200 opacity-100'
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 bg-light-grey  transform transition duration-300 ease-in-out ${
                navbarOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  )
}
export default NavBar
