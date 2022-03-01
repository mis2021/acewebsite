import React from "react";
import Link from "next/link";
import NavbarLinks from "./NavLinks";
import DropdownMenu from "components/Dropdowns/DropdownMenu";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import { aboutUsMenu, servicesFacilities, doctors, patients } from "../../constants/navbarMenu";
import { AllMenu } from "../../constants/navbarMenu";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  // console.log("AllMenu", AllMenu)

  return (
    <>
      {/* <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow"> */}
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg nav-bg-green-grad shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start mr-7">
            <Link href="/">
              <a
                className="text-white-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                // className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="#"
              >
                ACEMC-BOHOL
              </a>
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center  lg:bg-opacity-0 lg:shadow-none " +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >

            {
              AllMenu.map((e)=>(
                <>
                  {
                    e?.subContent.length >= 0 ? <><NavbarLinks title={e.title} icon={e.icon} link={e.path} /></> :
                    <><DropdownMenu title={e.title} icon={e.icon} menus={e.subContent} /></>
                  }
                </>
              ))
            }
            {/* <NavbarLinks title="About" icon="fas fa-hospital-alt" link={'/about'} />
            <NavbarLinks title="Services" icon="fas fa-newspaper" link={'/services'} />
            <NavbarLinks title="Doctors" icon="fas fa-newspaper" link={'/doctors'} />
            <DropdownMenu title="Patients and Visitors Guide" icon="fas fa-hospital-user" menus={patients} />
            <NavbarLinks title="News and Events" icon="fas fa-newspaper" link={'/news-events'}/> */}


            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                {/* <IndexDropdown /> */}
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-white-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  // className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/acebohol/"
                  target="_blank"
                >
                  <i className="text-white-700 fab fa-facebook text-lg leading-lg " />
                  {/* <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " /> */}
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.creative-tim.com%2Fnotus-nextjs%2F&text=Start%20your%20development%20with%20a%20Free%20Tailwind%20CSS%20and%20NextJS%20UI%20Kit%20and%20Admin.%20Let%20Notus%20NextJS%20amaze%20you%20with%20its%20cool%20features%20and%20build%20tools%20and%20get%20your%20project%20to%20a%20whole%20new%20level."
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li> */}

              {/* <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index-navbar"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </a>
              </li> */}

              {/* <li className="flex items-center">
                <button
                  className="bg-blueGray-700 text-white active:bg-blueGray-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
