"use client"
import Link from 'next/link';
import React from 'react';
import { BiUserCircle } from "react-icons/bi";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import {usePathname} from 'next/navigation'
const Navbar = () => {

    const path = usePathname();

    console.log(path)
    const navLink = <>

        <li className={`font-semibold ${path.includes('/') ? 'text-green-500' : '' } `}><Link href='/'>Home</Link></li>
        <li className={`font-semibold ${path.startsWith('/destination') ? 'text-green-500' : '' } `}><Link href='/destination'>Destination</Link></li>
        <li className={`font-semibold ${path.includes('/news') ? 'text-green-500' : '' } `}><Link href='/news'>News</Link></li>
        <li className={`font-semibold ${path.startsWith('/contact') ? 'text-green-500' : '' } `}><Link href='/contact'>Contact</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 lg:min-w-full h-[100px] bg-white text-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                       
                    </ul>
                </div>
            <a className="btn btn-ghost normal-case text-xl">Explore ephere</a>
            </div>
            {/* <div className="navbar-center hidden lg:flex"> */}
            <div className="navbar  hidden lg:flex justify-end ml-[500px]  w-full text-right ">
                <ul className="menu menu-horizontal  px-1 ">
                    {navLink}
               
                </ul>
            </div>
            <div className="  divider lg:divider-horizontal py-4 pr-5  "></div>
            <div className="navbar-end block lg:flex gap-5 justify-normal  ">
               
                <a className='hidden lg:block'>
                    <HiOutlineMagnifyingGlass className='h-[30px] w-[30px]'/>
                </a>
                <a className='h-[40px] w-[40px] flex items-center justify-center bg-slate-100 rounded-full'>
                    <BiUserCircle className='h-[25px] w-[25px]'/>
                </a>
            </div>
        </div>
    );
};

export default Navbar;