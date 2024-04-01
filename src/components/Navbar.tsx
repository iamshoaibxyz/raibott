// "use client";
import Link from "next/link";
import Logo from "/public/Logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="navbar max-w-7xl border-b border-b-sky-100/20 lg:px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow border-2 divide-y divide-sky-200 rounded-box w-52"
          >
            <li>
              <Link href={"#"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>

            {/* <li>
              <Link href={"#"}>Parent</Link>
              <ul className="p-2">
                <li>
                  <Link href={"#"}>Submenu 1</Link>
                </li>
                <li>
                <Link href={"#"}>Submenu 2</Link>
                </li>
                </ul>
            </li> */}
          </ul>
        </div>
        <Link href={"#"} className="btn btn-ghost text-xl">
          <Image src={Logo} alt="Logo" />
          <p>RaiBott</p>
        </Link>
      </div>
      <div className="navbar-end hidden sm:flex">
        <ul className="menu md:text-base md:gap-3 font-semibold menu-horizontal px-1">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>Contact</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>

          {/* <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <Link href={"#"}>Submenu 1</Link>
                </li>
                <li>
                  <Link href={"#"}>Submenu 2</Link>
                </li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</Link>
      </div> */}
    </div>
  );
}
