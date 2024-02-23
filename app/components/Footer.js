"use client";

import { Footer } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const customTheme = {
  footer: {
    icon: {
      size: "h-8 w-8",
      base: "text-blue-900",
    },
  },
};

export default function PageFooter() {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Footer container className=" bottom-0 left-0 right-0 text-center mt-32">
        <div className="w-full">
          <div className="flex space-x-32 justify-center">
            <Footer.Icon href="https://github.com/mantejl" icon={BsGithub} />
            <Footer.Icon
              href="https://www.linkedin.com/in/mantejlamba/"
              icon={BsLinkedin}
            />
            <Footer.Icon href="mailto:mlamba@usc.edu" icon={MdEmail} />
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}
