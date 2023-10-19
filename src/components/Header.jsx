import { Link, NavLink } from "react-router-dom";
import pic from "../assets/iconcar.png";
import icon from "../assets/icons8-user.gif";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import "../../src/App.css";
const Header = () => {
  const [dark, setDark] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  const handleToggle = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
    setDark(!dark);
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          className={
            " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-black text-white font-bold"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-black text-white font-bold"
          }
          to={user ? "/addproduct" : "/login"}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-black text-white font-bold"
          }
          to={user ? "/mycart" : "/login"}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-transparent ">
      <div className="navbar max-w-7xl  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost text-gray-500 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" flex items-center normal-case text-red-500 text-2xl font-bold">
            <span className="">
              <img src={pic} alt="" />
            </span>
            Beat<span className="text-gray-700">Speed</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end grid space-y-2 items-center content-center">
          <div>
            {user?.displayName ? (
              <p className="text-red-600 border-x-2 text-center">
                User: {user.displayName}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="justify-center  items-center mx-auto flex">
            <div className="avatar">
              <div className="w-8 rounded-full">
                {/* <img src={icon} /> */}
                {user?.photoURL ? (
                  <img src={user.photoURL} />
                ) : (
                  <img src={icon} />
                )}
              </div>
            </div>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-black text-white"
              >
                LOGOUT
              </button>
            ) : (
              <Link to={"/login"}>
                <a className="btn bg-black text-white">Sign In</a>
              </Link>
            )}
            <button onClick={handleToggle}>
              {dark ? (
                <BsToggleOn className="text-4xl"></BsToggleOn>
              ) : (
                <BsToggleOff className="text-4xl"></BsToggleOff>
              )}
            </button>
          </div>
          {/* <Link to={"/login"}>
            <a className="btn bg-black text-white">Sign In</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
