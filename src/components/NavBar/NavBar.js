import './NavBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {CgProfile} from 'react-icons/cg'
const NavBar = ({ isLogged, setIsLogged }) => {
  return (
    <nav className='navbar'>
      <ul className='navlist'>
        <li className='navli'>
          {' '}
          <Link className='navLink' to='/'> Home </Link>
        </li>
        <li className='navli'>
          {' '}
          <Link className='navLink' to='/About'> About </Link>
        </li>
        <li className='navli'>
          {' '}
          <Link className='navLink' to='/Complaints'> Complaints </Link>
        </li>
        <li className='navli'>
          {' '}
          <Link className='navLink' to='/Track'> Track </Link>
        </li>
        <li className='navli'>
          {' '}
          <Link className='navLink' to='/Announcements'> Announcements </Link>
        </li>

        {isLogged && (
          <li className='navli'>
            {' '}
            <Link className='navLink'
              to='/SignOut'
            >
              Sign Out
            </Link>
          </li>
        )}

        {!isLogged && (
          <li className='navli'>
            {' '}
            <Link className='navLink'
              to='/SignIn'
            >
              Sign In
            </Link>
          </li>
        )}

        {isLogged && (
          <li className='navli'>
            {' '}
            <Link    
              className='navLink'
              to='/userProfile'
            >
              <CgProfile className='profile'/>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
