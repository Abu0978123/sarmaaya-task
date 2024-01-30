import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

const Menu = () => {
  return (
    <>
      <ul className="hidden md:flex items-center gap-5 px-4 font-medium pt-3 menu2">
        <Link
          className="no-underline text-black active:font-bold active:!text-black hover:!text-blue-500"
          href="/electronic/electronic"
        >
         Electronic
        </Link>
        <Link
          className="no-underline text-black active:font-bold active:!text-black   hover:!text-blue-500"
          href="/menFashion/menClothing"
        >
          Mens Fashion
        </Link>
        <Link
          className="no-underline text-black active:font-bold active:!text-black   hover:!text-blue-500"
          href="/womenFashion/womenFashion"
        >
          Women's Fashion
        </Link>
        <Link
          className="no-underline text-black active:font-bold after:!text-black   hover:!text-blue-500"
          href="/jewelry/jewelry"
        >
          Jewelry
        </Link>
      </ul>

      <ul className="hidden lg:flex items-center gap-5 font-medium pt-3 px-3">
        <input
          className="h-[34px] w-[414] outline-none border rounded-[20px] p-[20px] relative"
          placeholder="Search"
          type="search"
        />
        <CiSearch className=" text-2xl h-4 w-5 text-black absolute ml-[210px]" />
      </ul>
    </>
  );
};

export default Menu;
