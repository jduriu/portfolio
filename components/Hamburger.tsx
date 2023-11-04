"use client";

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";
import Link from "next/link";

export default function Hamburger({ links }) {
  const [navOpen, setOpen] = useState(false);

  if (navOpen) {
    return (
      <div
        className="fixed top-0 right-0 w-full h-full
			transition ease-in-out duration-300
			bg-black justify-end"
      >
        <div className="flex h-[50px] justify-between items-center">
          <div className="flex justify-center items-center w-[50px]">
            <div>J/U</div>
          </div>
          <div className="flex justify-center items-center w-[50px]">
            <AiOutlineClose size={20} onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 pt-10">
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className="px-4"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sm:hidden justify-center items-center flex w-[50px]">
        <GiHamburgerMenu  onClick={() => setOpen(true)} />
      </div>
    );
  }
}
