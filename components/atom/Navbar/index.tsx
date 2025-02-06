import React from "react";
import Link from "next/link";

import Image from "next/image";
import Logo from "@/public/assets/icons/Logo/Logo.svg";
import MaxWidthWrapper from "../../Layout/MaxWidthWrapper";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className=" sticky bg-white top-0 z-[100] shadow">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-[10px] ">
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" className=" w-[120px] h-auto" />
          </Link>
          {/* Client Component */}
          <NavLinks />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
