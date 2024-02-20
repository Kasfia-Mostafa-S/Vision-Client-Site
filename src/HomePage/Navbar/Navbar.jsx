import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/AuthProvider/Authentication";

const Navbar = () => {
  const [error, setError] = useState("");
  const { user ,logOut} = useContext(AuthContext) || {};
  // console.log(user)
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.massage);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#dc34ac] text-base font-extrabold"
              : "text-[#dc34ac] text-base font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#dc34ac] text-base  font-extrabold"
              : "text-[#dc34ac] text-base font-semibold"
          }
        >
          Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#dc34ac] text-base font-extrabold"
              : "text-[#dc34ac] text-base font-semibold"
          }
        >
          Add Product
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 py-1 px-4 text-center rounded-tr-md rounded-bl-md text-xl text-white">
            vi<span className="text-3xl">S</span>ion
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
         <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {
                  user ? <img
                  alt=""
                  src={user?.photoURL}
                />:<img
                alt=""
                src='https://i.ibb.co/3mrC5qK/966-9665493-my-profile-icon-blank-profile-image-circle.jpg'
              />
                }
                
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              {user ? (
                <li>
                  <a onClick={handleSignOut} className="text-black">
                    Log Out
                  </a>
                </li>
              ) : (
                <Link to="/login">
                  <li>
                    <a className="text-black">Login</a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
