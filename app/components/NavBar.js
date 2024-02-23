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
      <Navbar.Collapse className="mr-8 mt-3">
        <Navbar.Link href="/">
          <span className="hover:text-blue-900 text-lg">HOME</span>
        </Navbar.Link>
        <Navbar.Link href="/experience">
          <span className="hover:text-blue-900 text-lg">EXPERIENCE</span>
        </Navbar.Link>
        <Navbar.Link href="/coursework">
          <span className="hover:text-blue-900 text-lg">COURSEWORK</span>
        </Navbar.Link>
        <Navbar.Link href="/campusinvolvements">
          <span className="hover:text-blue-900 text-lg">
            CAMPUS INVOLVEMENTS
          </span>
        </Navbar.Link>
        <Navbar.Link href="/projects">
          <span className="hover:text-blue-900 text-lg">PROJECTS</span>
        </Navbar.Link>
        <Navbar.Link href="/projects">
          <span className="hover:text-blue-900 text-lg">RESUME</span>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
