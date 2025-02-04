"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

import Text from "../Text";
import Button from "../Button";
import { navitems } from "./config";

const NavLinks = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className=" hidden md:flex items-center gap-[42px] ">
        {/* Nav items */}
        <nav className=" flex gap-[15px] items-center">
          {navitems?.map((nav) => (
            <Link key={nav?.path} href={nav?.path}>
              <Text
                variant="nav"
                className={`${
                  pathname === nav?.path ? "text-primary font-normal" : ""
                }`}
              >
                {nav?.name}
              </Text>
            </Link>
          ))}
        </nav>
        <Button variant="default" className=" font-black ml-5">
          Get Quotation
        </Button>
      </div>
      {navOpen ? (
        <IoCloseOutline
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
          className=" flex md:hidden w-[25px] h-[25px]"
        />
      ) : (
        <RxHamburgerMenu
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
          className=" flex md:hidden w-[25px] h-[25px]"
        />
      )}

      <div
        className={`md:hidden border sm:w-[60%] border-border_color transition-all  duration-700 ease-in-out fixed z-10 top-0 flex flex-col pt-[50px] px-[20px] gap-[15px] bg-white  h-full ${
          navOpen ? "left-0" : "fixed left-[-100%] ease-in-out duration-700"
        }`}
      >
        <nav className=" relative w-full  flex flex-col gap-[15px] justify-center items-center">
          {navitems?.map((nav) => (
            <Link key={nav?.path} href={nav?.path}>
              <Text
                variant="nav"
                className={`${
                  pathname === nav?.path ? "text-primary font-normal" : ""
                }`}
              >
                {nav?.name}
              </Text>
            </Link>
          ))}
        </nav>
        <Button variant="default" className=" font-black ml-5">
          Get Quotation
        </Button>
      </div>
    </>
  );
};

export default NavLinks;
