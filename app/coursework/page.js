"use client";

import React from "react";
import { Accordion } from "flowbite-react";

const CourseworkPage = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-2xl mb-2 ml-4 mt-4 text-blue-900">
          Currently Enrolled
        </p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Spring 2024</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5">
                <li>
                  CSCI 350: Introduction to Operating Systems
                  <ul className="list-disc pl-5">
                    <li>Lab 1: Introduction to Unix</li>
                    <li>Lab 2: Processes and Signals</li>
                    <li>Lab 3: Threads</li>
                    <li>Lab 4: Synchronization</li>
                    <li>Lab 5: Memory Management</li>
                    <li>Lab 6: File Systems</li>
                  </ul>
                </li>
                <li>
                  CSCI 401: Capstone: Design and Construction of Large Software
                  Systems
                </li>
                <li>CSCI 360: Introduction to Artificial Intelligence</li>
                <li>
                  CSCI 532: Innovation for Defense Applications (Master's Class)
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      <div>
        <p className="font-bold text-2xl mb-2 ml-4 mt-4 mb-2 text-blue-900">
          Previously Taken
        </p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Fall 2023</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5">
                <li> CSCI 310: Software Engineering</li>
                <li>CSCI 356: Introduction to Computer Systems</li>
                <li>CSCI 430: Introduction to Computer and Network Security</li>
                <li>MATH 407: Probability Theory</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Spring 2023</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5">
                <li>CSCI 201: Principles of Software Development</li>
                <li>
                  CSCI 270: Introduction to Algorithms and the Theory of
                  Computing
                </li>
                <li>ITP 325: Ethical Hacking and Systems Defense</li>
                <li>ITP 216: Applied Python</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Fall 2022</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5">
                <li>CSCI 104: Data Structures and Object Oriented Design</li>
                <li>EE 109: Introduction to Embedded Systems</li>
                <li>ITP 116: Accelerated Programming in Python</li>
                <li>WRIT 340: Advanced Writing for Engineers</li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>Spring 2022</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5">
                <li>CSCI 103: Introduction to Programming</li>
                <li>CSCI 170: Discrete Methods in Computer Science</li>
                <li>
                  ITP 125: From Hackers to CEOs: An Introduction to Information
                  Security
                </li>
                <li>
                  MATH 225: Linear Algebra and Linear Differential Equations
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default CourseworkPage;
