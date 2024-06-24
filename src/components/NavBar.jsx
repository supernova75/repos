const NavBar = () => {
  return (
    <header className="w-full fixed sticky top-0 z-50 left-0 pt-2 pb-2 pr-10 pl-10 h-20 flex bg-primary-pantone5255c">
      <div className="text-light-grey flex-grow z-50">
        <img src="../Logos/Tamkeen_dual_rgb-02.svg" className=" h-full" />
      </div>
      <div className=" flex items-center justify-center">
        <button className=" lg flex top-0 right-3  relative text-primary-pantone-032c focus:outline-none">
          <span className="text-sm">
            <img
              src="../Icons/LogOut_Icon.svg"
              className=" w-4 inline mr-2"
            ></img>
            Log Out
          </span>
        </button>
      </div>
    </header>
  )
}
export default NavBar
