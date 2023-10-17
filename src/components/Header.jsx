import { Link, NavLink } from "react-router-dom";
import pic from "../assets/iconcar.png";
import icon from "../assets/icons8-user.gif";

const Header = () => {
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
          to={"/addProduct"}
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            " border-t-4 hover:bg-white rounded-lg px-2 py-4 bg-black text-white font-bold"
          }
          to={"/myCart"}
        >
          My Cart
        </NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-red-700 ">
      <div className="navbar max-w-7xl  mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <a className=" flex items-center normal-case text-white text-2xl font-bold">
            <span className="">
              <img src={pic} alt="" />
            </span>
            Beat<span className="text-black">Speed</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={icon} />
            </div>
          </div>
          <Link to={"/login"}>
            <a className="btn bg-black text-white">Sign In</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
