import React, { useState, useEffect } from "react";
import LandingContainer from "./landingContainer";
import { useSession } from "next-auth/react";
import Button from "../elements/button";
import CustomLink from "../elements/customLink";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function LandingHeader() {
  const { data: session, status } = useSession();
  const userEmail = session?.user?.email;
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (status === "authenticated") {
      setIsAuthenticated(true);
    }
  }, [status]);

  const handleCloseMenu = () => {
    document.getElementById("toggle_nav").checked = false;
  };

  return (
    <>
      <header>
        <nav className="z-10 w-full absolute pt-4 lg:pt-0">
          <LandingContainer>
            <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
              <input
                aria-hidden="true"
                type="checkbox"
                name="toggle_nav"
                id="toggle_nav"
                className="hidden peer"
              />
              <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                <Link
                  href="/"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                  onClick={handleCloseMenu}
                >
                  <div aria-hidden="true" className="flex space-x-1"></div>
                  <img
                    className="h-10 w-10 rounded-full bg-zinc-100 object-cover"
                    src="/logo.png"
                    alt="logo"
                  ></img>
                  <p className="text-lg">BoilerCode</p>
                </Link>

                <div className="relative flex items-center justify-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative  p-6 -mr-6"
                  >
                    <div
                      aria-hidden="true"
                      id="line"
                      className="m-auto h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                    <div
                      aria-hidden="true"
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-5 rounded bg-gray-300 transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom 
              scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 
              lg:hidden bg-gray-900/70"
              ></div>
              <div
                className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                            dark:shadow-none"
              >
                <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                  <ul className="flex lg:flex-row flex-col rounded-md lg:rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-gray-700 dark:text-white">
                    {isAuthenticated && (
                      <li className="flex justify-center items-center text-gray-400">
                        <CustomLink link="#" text={userEmail} />
                      </li>
                    )}
                    <Navigation href="#pricing">Pricing</Navigation>
                    <Navigation href="#features">Features</Navigation>
                    <Navigation href="#faqs">FAQs</Navigation>
                    <Navigation href="#stats">Stats</Navigation>
                    <Navigation
                      href={isAuthenticated ? "/dashboard" : "/api/auth/signin"}
                    >
                      Dashboard
                    </Navigation>
                  </ul>
                </div>
                <button
                  type="button"
                  className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-gray-700 dark:text-white"
                  onClick={() => setTheme(otherTheme)}
                >
                  <LuSun className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden" />
                  <LuMoon className="hidden h-6 w-6 transition dark:block dark:text-white" />
                </button>
              </div>
            </div>
          </LandingContainer>
        </nav>
      </header>
    </>
  );
}

function Navigation({ href, children }) {
  let isActive = usePathname() === href;

  return (
    <li>
      <Link
        href={href}
        className={`
          relative block px-3 py-2 transition text-base lg:text-sm
          ${isActive ? "text-primary" : "hover:text-primary"}
        `}
      >
        {children}
      </Link>
    </li>
  );
}
