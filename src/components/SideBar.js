/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import {Link} from 'react-router-dom'

function SideBar() {
  return <>
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
        </a>

 

        <li className="nav-item active">
            <Link to='/users' className="nav-link">
                <i class="fa-solid fa-users"></i>
                <span> List Users</span>
            </Link>
        </li>
        <li className="nav-item active">
            <Link to='/add-user' className="nav-link collapsed">
                <i class="fa-solid fa-user-plus"></i>
                <span> Create User</span>
            </Link>
        </li>
    </ul>
  </>
}

export default SideBar