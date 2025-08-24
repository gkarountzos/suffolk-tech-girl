"use client";

import Logo from "@/components/Navigation/Logo";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CogIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const { scrollTo } = useSmoothScroll();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHref: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    scrollTo(targetHref);
  };

  return (
    <>
      <header className="fixed w-full z-[70] backdrop-blur-lg border-b-2 border-primary ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
            </div>

            <div>
              <CogIcon className="h-8 w-8 md:h-12 md:w-12 animate-[spin_20s_linear_infinite]" />
            </div>

            <div className="pl-2">
              <label
                htmlFor="burger-checkbox"
                className="relative w-[30px] h-[20px] md:w-[40px] md:h-[30px] cursor-pointer block "
              >
                <input
                  type="checkbox"
                  id="burger-checkbox"
                  className="hidden"
                  checked={isOpen}
                  onChange={toggleMenu}
                />
                <span
                  className={`block absolute h-[3px] md:h-[4px] w-full bg-primary left-0 origin-left transition-all duration-250 ease-in-out ${
                    isOpen
                      ? "rotate-45 top-0 md:top-[-2px] md:left-[5px]"
                      : "top-0"
                  }`}
                ></span>
                <span
                  className={`block absolute h-[3px] md:h-[4px] w-full bg-primary left-0 origin-left transition-all duration-250 ease-in-out top-1/2 -translate-y-1/2 ${
                    isOpen ? "w-0 opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block absolute h-[3px] md:h-[4px] w-full bg-primary left-0 origin-left transition-all duration-250 ease-in-out ${
                    isOpen
                      ? "-rotate-45 top-[21px] md:top-[25px] md:left-[5px]"
                      : "top-full -translate-y-full"
                  }`}
                ></span>
              </label>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-background/10  backdrop-blur-lg transition-opacity duration-300 ease-in-out pt-16 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="relative group font-serif font-black text-5xl md:text-7xl lg:text-8xl pb-2 md:pb-4 lg:pb-6 gradient-text leading-tight"
              >
                {link.label}
                <span className="absolute bottom-2 left-0 h-[3px] w-full origin-left scale-x-0 transform bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
