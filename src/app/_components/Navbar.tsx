'use client';

import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed z-50 flex h-[80px] w-full items-center justify-between bg-[#FFFFFF] px-4 text-black">
      <div className="cursor-pointer text-2xl font-bold opacity-100 transition-all hover:opacity-80">
        <Link href="/">
          <p className=" text-white-700">
            Cornelius <span className="text-yellow-300">.</span>
          </p>
        </Link>
      </div>
      {/*Menu*/}
      <ul className="hidden gap-4 md:flex ">
        <li>
          <Link
            className="duration-70 hover:font-semibold hover:text-green-600 font-medium"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#about"
            className="duration-70 overflow-y-scroll hover:font-semibold hover:text-green-600 font-medium"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="duration-70 hover:font-semibold hover:text-green-600 font-medium"
          >
            Career Paths
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="hover:font-semibold hover:text-green-600 font-medium"
          >
            Partner With Us
          </Link>
        </li>
        <li>
          <Link
            href="#blogs"
            className="rounded-3xl border-2 border-green-400 bg-white px-4 py-2 text-green-400 font-medium"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="rounded-3xl border-2 border-green-400 bg-white px-4 py-2 text-green-400 font-medium"
          >
            Log In
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="z-10 md:hidden">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "hidden"
            : "absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"
        }
      >
        <ul>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} href="/">
              Home
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#about">
              About
            </Link>
          </li>
          <li className="py-6">
            <Link onClick={handleClick} href="#skills">
              Skills
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#projects">
              Projects
            </Link>
          </li>
          <li className="py-6">
            {" "}
            <Link onClick={handleClick} href="#contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
