import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


const Menu = () => {
  return (
    <>
    <ul className="hidden md:flex items-center gap-8 font-medium pt-3 menu2">
      <Link className="no-underline text-black active:font-bold active:!text-black  hover:!text-blue-500" href="/electronic" >Electronic</Link>
      <Link className="no-underline text-black active:font-bold active:!text-black   hover:!text-blue-500" href="/menFashion">Mens Fashion</Link>
      <Link className="no-underline text-black active:font-bold active:!text-black   hover:!text-blue-500" href="/womenFashion">Women's Fashion</Link>
      <Link className="no-underline text-black active:font-bold active:!text-black   hover:!text-blue-500" href="/jewelry">Jewelry</Link>
    </ul>

    <ul className="hidden lg:flex items-center gap-8 font-medium pt-3 ">
        <input className="h-[34px] w-[414] outline-none border-1 rounded-[20px] p-[20px] relative" placeholder="Search" type="search"/>
        <CiSearch  className=" text-2xl h-4 w-5 text-black absolute ml-[200px]"/>
        </ul>
    </>
  );
};

export default Menu;
