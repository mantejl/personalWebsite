"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export default function NavBar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src="/favicon.ico"
          className="mr-3 h-12 pt-2 ml-2 mt-3 mb-3"
          alt="Flowbite React Logo"
        />
        <span className="self-center font-serif whitespace-nowrap text-3xl font-semibold text-blue-900 pt-2">
          Mantej Lamba
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="mr-2">
        <Navbar.Link href="#">
          <span className="hover:text-blue-400 text-l">HOME</span>
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          <span className="hover:text-blue-400 text-l">EXPERIENCE</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="hover:text-blue-400 text-l">COURSEWORK</span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="hover:text-blue-400 text-l">
            CAMPUS INVOLVEMENTS
          </span>
        </Navbar.Link>
        <Navbar.Link href="#">
          <span className="hover:text-blue-400 text-l">PROJECTS</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
