import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="fixed h-20 w-full text-white font-mono font-semibold bg-black/20 flex justify-center items-center gap-5">
        <Link to="/" className="">Home</Link>
        <Link to="/flipping" className="">Flip</Link>
        <Link to="/about" className="">About Us</Link>
        <Link to="/blogs" className="">Blogs</Link>
    </div>
  )
}
