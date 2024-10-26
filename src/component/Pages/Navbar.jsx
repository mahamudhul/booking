import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/images/logo.png'

const Navbar = () => {

    const details = <>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/'>ABOUT US</NavLink>
        <NavLink to='/'>SERVICES</NavLink>
        <NavLink to='/'>PAGES</NavLink>
        <NavLink to='/'>LISTING</NavLink>
        <NavLink to='/'>BLOG</NavLink>
        {/* <NavLink to='/register'>Register</NavLink> */}
    </>


    return (
        <div className=''>
            {/*  className='absolute' */}
            {/* <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            {details}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {details}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div> */}
            <div className='bg-slate-950 py-5 text-white p-5'>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <h1 className='text-[45px] font-bold '>ROYEL ENFIELD</h1>
                        {/* <img src={logo} alt="" /> */}
                    </div>
                    <div>

                    </div>
                    <div className='flex gap-5 text-xl'>
                        {details}
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;