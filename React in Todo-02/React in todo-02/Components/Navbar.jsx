import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <div className="navbar bg-dark">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Todo App</a>
  </div>

  <div className='flex-none gap-5' >

  <Link to="login">Login</Link>
  <Link to="signup">Sign up</Link>
  </div>
  {/* <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            
          </ul>
        </details>
      </li>
    </ul>
  </div> */}
</div>
<Outlet/>
  </>
  )
}

export default Navbar
