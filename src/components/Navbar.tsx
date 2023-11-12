// 'use client'

import Link from "next/link";
import Search from "./Search";
const Navbar = () => {
    return (
       <nav className="bg-gray-500 p-1 capitalize container mx-auto flex justify-between
      text-white flex-col md:flex-row sticky top-0 drop-shadow-xl">
        <Link href="/"
        className="text-3xl  font-bold mb-2 md:mb-0 ">Simple WikiRocket Project</Link>
       <Search/>
       </nav>
    );
};

export default Navbar;