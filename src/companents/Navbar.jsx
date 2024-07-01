import React from "react"
import { Link } from "react-router-dom"


function Navbar() {
    return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">daisyUI</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <ul className="flex-none">
         <li className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle  avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
      </li>
      </ul>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>)
}

export default Navbar