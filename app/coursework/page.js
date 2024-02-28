"use client";

import React from "react";
import { Accordion } from "flowbite-react";

const CourseworkPage = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-3xl mb-2 ml-4 mt-4 text-blue-900">
          Currently Enrolled
        </p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title>Spring 2024</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 350: Introduction to Operating Systems
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Introduction to operating systems' foundational concepts
                      including processes, CPU, memory, storage, and security
                    </li>
                    <li>
                      Developing new OS functionality, including system calls,
                      thread management, process synchronization, and memory
                      management in C
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20211/30175.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Spring 2021 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 401: Capstone: Design and Construction of Large
                    Software Systems
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Working in a team of six to develop a software solution
                      for an external stakeholder using Python, FastAPI,
                      Supabase and integrations with PayPal, Stripe and
                      SquareSpace APIs
                    </li>
                    <li>
                      Currently building an automated process to allow a
                      retirement learning community to track/edit their members,
                      membership fees, donations and orders in an easy-to-use
                      and simple manner
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20211/29963.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Spring 2021 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 360: Introduction to Artificial Intelligence
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learning about concepts underlying intelligent systems
                      like agents, problem-solving, search, representation,
                      reasoning, planning and machine learning
                    </li>
                    <li>
                      Writing Python code to implement algorithms for search,
                      machine learning, neural networks, deep learning and tree
                      problems
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20191/30000.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Spring 2019 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 532: Innovation for Defense Applications (Master's
                    Class)
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Part of a five person group that is working to develop a
                      MVP (minimum viable product) for a defense problem sourced
                      from sponsors in the Department of Defense, Intelligence
                      Communities, and Homeland Security
                    </li>
                    <li>
                      Engaging in customer discovery, establishing success
                      metrics, and creating prototypes to propose quality
                      problem solutions
                    </li>

                    <li>
                      <a
                        href="http://csclass.info/USC/H4D/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Spring 2022 Syllabus
                      </a>
                    </li>
                  </ul>
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
