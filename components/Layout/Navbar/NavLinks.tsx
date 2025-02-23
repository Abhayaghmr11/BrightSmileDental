"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import ContactUsForm from "@/components/molecule/form/ContactUsForm";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";

const AnimatedModalNavBar = () => {
  return (
    <Modal>
      <ModalTrigger className="  bg-primary text-white flex justify-center group/modal-btn">
        <span className="group-hover/modal-btn:translate-x-60 text-center transition duration-500">
          Get Quotation
        </span>
        <div className=" -translate-x-60 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          🦷
        </div>
      </ModalTrigger>
      <ModalBody className="modalScroll">
        <ModalContent>
          <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
            Book your appointment at{" "}
            <span className="px-1 py-0.5 rounded-md  bg-primary/80 text-white border border-gray-200">
              Bright Smile
            </span>{" "}
            <span className="px-1 py-0.5 rounded-md  bg-primary/80 text-white border border-gray-200">
              Dental Clinic
            </span>{" "}
          </h4>
          <div className=" flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
            <ContactUsForm />
          </div>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

import Text from "../../atom/Text";
import { navitems } from "./config";

const NavLinks = () => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center gap-[42px]">
        {/* Nav items */}
        <nav className="flex gap-[20px] items-center">
          {navitems?.map((nav) => (
            <Link key={nav?.path} href={nav?.path}>
              <Text
                variant="nav"
                className={`${
                  pathname === nav?.path ||
                  (nav?.path !== "/" && pathname.startsWith(nav?.path))
                    ? "text-primary font-normal"
                    : ""
                }`}
              >
                {nav?.name}
              </Text>
            </Link>
          ))}
          <AnimatedModalNavBar />
        </nav>
      </div>
      {navOpen ? (
        <IoCloseOutline
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
          className="flex md:hidden w-[25px] h-[25px] transition ease-in-out duration-700"
        />
      ) : (
        <RxHamburgerMenu
          onClick={() => {
            setNavOpen((prev) => !prev);
          }}
          className="flex md:hidden w-[25px] h-[25px] transition ease-in-out duration-700"
        />
      )}

      <div
        className={`md:hidden border sm:w-[60%] border-border_color transition-all duration-700 ease-in-out fixed z-10 top-0 flex flex-col pt-[50px] px-[20px] gap-[15px] bg-white h-full ${
          navOpen ? "left-0" : "fixed left-[-100%] ease-in-out duration-700"
        }`}
      >
        <nav className="relative w-full flex flex-col gap-[15px] justify-center items-center">
          {navitems?.map((nav) => (
            <Link
              key={nav?.path}
              href={nav?.path}
              onClick={() => setNavOpen(false)}
            >
              <Text
                variant="nav"
                className={`${
                  pathname === nav?.path ||
                  (nav?.path !== "/" && pathname.startsWith(nav?.path))
                    ? "text-primary font-normal"
                    : ""
                }`}
              >
                {nav?.name}
              </Text>
            </Link>
          ))}
        </nav>
        <AnimatedModalNavBar />
      </div>
    </>
  );
};

export default NavLinks;
