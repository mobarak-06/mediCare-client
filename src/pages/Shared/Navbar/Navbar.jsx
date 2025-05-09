import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink>About</NavLink>
      </li>
      <li>
        <NavLink>Appointment</NavLink>
      </li>
      <li>
        <NavLink>Login</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#07332f] px-10 md:px-32 font">
        <div className="navbar-start">
          <div className="absolute right-0">
            <div className="dropdown ">
              <div tabIndex={0} role="button" className=" lg:hidden">
                <GiHamburgerMenu size={30} className="text-white mr-10" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow absolute right-4"
              >
                {navOptions}
              </ul>
            </div>
          </div>
          <Link className="flex justify-center items-center text-white  text-xl">
          <img src="public/resources/logo.png" className="w-8 md:w-14 bg-[#07332f]" alt="" />
          <p className="text-2xl ml-1 md:text-4xl font-bold"><span className="text-[#F7A582]">Medi</span>Care</p>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1">
           {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
