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

        <hr className="sidebar-divider my-0"/>

        <li className="nav-item active">
            <Link to='/dashboard' className="nav-link">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </Link>
        </li>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

                <li className="nav-item">
                    <Link to='/add-user' className="nav-link collapsed">
                        <i className="fas fa-user fa-solid"></i>
                        <span>Create User</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <a className="collapse-item" href="javascript(void)javascript(void)">Buttons</a>
                            <a className="collapse-item" href="javascript(void)">Cards</a>
                        </div>
                    </div>
                </li>
    </ul>
  </>
}

export default SideBar