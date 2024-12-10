"use client";

import React from "react";
import { Accordion } from "flowbite-react";

const customTheme = {
  accordion: {
    title: {
      base: "text-2xl font-large",
    },
  },
};

const CourseworkPage = () => {
  return (
    <div>
      <div>
        <p className="font-bold text-3xl mb-2 ml-4 mt-4 text-blue-900">
          Currently Enrolled
        </p>
        <Accordion >
        <Accordion.Panel>
            <Accordion.Title className="text-2xl">Spring 2024</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 353: Introduction to Internetworking
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                    Learned about design principles, layering, protocol design/analysis of the global Internet, networked applications, 
                    the structure/architecture of the Internet, protocols for network transport and congestion control, 
                    network layer and routing, link layer/MAC, and network security
                    </li>
                    <li>
                      Wrote multi-threaded programs to create a network of communicating servers
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20211/30175.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        GitHub Link
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 570: Analysis of Algorithms
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Explored algorithm design techniques such as greedy, divide and conquer, dynamic programming, network flow, reduction,
                      approximation, linear programming and randomization for efficient algorithm construction
                    </li>
                    <li>
                      Completed various written theory assignments that required practical applications of content learned in class
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20243/30099.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Fall 2024 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    DSCI 552: Machine Learning for Data
                    Science
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                     Introduction to major algorithms used in machine learning, supervised and unsupervised learning, regression/classification methods, 
                     hidden Markov/graphical models, feedforward/recurrent neural networks and deep learning
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
                      GitHub
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
        <p className="font-bold text-3xl mb-2 ml-4 mt-4 text-blue-900">
          Previously Taken
        </p>
        <Accordion>
        <Accordion.Panel>
            <Accordion.Title className="text-2xl">Spring 2024</Accordion.Title>
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
          <Accordion.Panel>
            <Accordion.Title className="text-2xl">Fall 2023</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 310: Software Engineering
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Explored the key concepts and best practices of software
                      engineering, such as project management, software
                      requirements specification, architecture, design, and
                      testing
                    </li>
                    <li>
                      Created a mobile app for the Minesweeper game using Java
                      and Android Studio, inspired by Google's implementation:
                      <a
                        href="https://github.com/mantejl/minesweeper"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Worked in a team of 3 to develop a mobile application
                      using Java, Android Studio, Firebase and Google Maps SDK
                      that allows users to find and book seats in buildings
                      around USC campus:
                      <a
                        href="https://github.com/SaihajGulati/FindASeat"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 356: Introduction to Computer Systems
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Introduction to computer systems hardware organization and
                      programmer interface, covering topics like covering topics
                      like information representations, x86 assembly, memory
                      hierarchies, and compilation
                    </li>
                    <li>
                      Completed assignments in C and Assembly that involved
                      bitwise operations, reverse engineering, buffer overflow
                      attacks, creating cache functionality, and a dynamic
                      storage allocator
                    </li>
                    <li>
                      <a
                        href="https://usc-cs356.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Course Website
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    CSCI 430: Introduction to Computer and Network Security
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned the foundations of systems security, its workings,
                      and its role in protecting data and computing resources by
                      exploring topics like cryptography, encryption, key
                      management and intrusion detection
                    </li>
                    <li>
                      Gained hands-on experience through multiple labs and
                      capture-the-flag exercises where we worked in groups to
                      attack and defend servers, run vulnerability scans, and
                      analyze network traffic
                    </li>
                    <li>
                      <a
                        href="https://ccss.usc.edu/430/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Course Website
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="pb-4">
                  <p className="text-2xl font-extrabold">
                    MATH 407: Probability Theory
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned the basic concepts of probability theory, which
                      include probability space, conditional probability and
                      independence, various discrete and continuous random
                      variables and properties of expectation
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20221/39992.pdf"
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

          <Accordion.Panel>
            <Accordion.Title className="text-2xl">Spring 2023</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li>
                  <p className="text-2xl font-extrabold">
                    CSCI 201: Principles of Software Development
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Introduction to software engineering principles, designing
                      and implementing solutions, performing unit testing,
                      engaging in multi-threaded programming in Java, and using
                      HTML/CSS for design
                    </li>
                    <li>
                      Project #1 - A Java program to manage event data
                      efficiently that includes file validation and a
                      user-friendly menu for diverse operations and the GSon
                      library for JSON parsing:
                      <a
                        href="https://github.com/mantejl/EventDataManager"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Project #2 - Java program that replicates a ticket trading
                      system by processing JSON artist and tour data, CSV ticket
                      trade details, and executing scheduled transactions using
                      locks and semaphores to ensure proper agent scheduling:
                      <a
                        href="https://github.com/mantejl/TicketTrading"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Project #3 - Java multi-threaded networked ticket trading
                      system that integrates real-time data from the
                      Ticketmaster API, and utilizes locks/semaphores to enable
                      concurrent trades among agents, manage dynamic ticket
                      sales, and handle queued trade requests:
                      <a
                        href="https://github.com/mantejl/NetworkedTicketTradingSystem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Project #4 - Full-Stack ticket trading web application
                      using Java, HTML/CSS, Databases/JDBC/SQL, Tomcat, Java
                      Servlets, and AJAX that allows users to search for events,
                      create accounts, buy and sell tickets, and manage their
                      wallet:
                      <a
                        href="https://github.com/mantejl/TicketTradingWebApp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    CSCI 270: Introduction to Algorithms and the Theory of
                    Computing
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned fundamental algorithmic concepts and completed
                      written assignments about topics including stable
                      matching, greedy algorithms, divide and conquer, dynamic
                      programming, graph algorithms, NP-completeness and
                      recursion theory
                    </li>

                    <li>
                      <a
                        href="https://bytes.usc.edu/cs270/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600"
                      >
                        Course Website
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    ITP 325: Ethical Hacking and Systems Defense
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Engaged in ethical hacking practices by understanding the
                      core foundations of computer security ethics, exploring
                      the hacker mindset, and delving into the history of
                      hackers
                    </li>
                    <li>
                      Acquired essential knowledge in basic networking, security
                      technologies, security policy, and fundamental system
                      defense strategies to effectively analyze and secure
                      computer systems
                    </li>
                    <li>
                      Worked in a team of 5 to write a 20 page penetration
                      testing report by simulating an attack to identify
                      vulnerabilities and potential entry points across three
                      specified networks:
                      <a
                        href="/pentestReport.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        Penetration Testing Report
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    ITP 216: Applied Python
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned about "Pythonic" programming techniques to
                      manipulate data efficiently and effectively in various
                      applications and scenarios
                    </li>

                    <li>
                      Completed Python assignments involving scientific
                      computations, data visualization, list comprehensions,
                      context managers, generators, web development and machine
                      learning:
                      <a
                        href="https://github.com/mantejl/AppliedPython"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="text-2xl">Fall 2022</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li>
                  <p className="text-2xl font-extrabold">
                    CSCI 104: Data Structures and Object Oriented Design
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned how to choose, implement, and evaluate data
                      structures and algorithms, including linear structures,
                      search and sorting methods and graph representations in
                      C++
                    </li>
                    <li>
                      Assignment #1 - Implementation of 2 programs: a recursive
                      function that splits a sorted singly-linked list into two
                      sorted linked lists, and another program that focuses on
                      an unrolled linked list that stores multiple elements in
                      each node:
                      <a
                        href="https://github.com/mantejl/UnrolledLinkedList"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Assignment #2 - Code that includes functions for checking
                      leaf node levels in a binary tree, a templated BST with
                      insert, remove, find, and clear operations, and an AVL
                      tree extension for balanced insertion/removal. Defines AVL
                      nodes, operations, and helper functions for rotation and
                      balancing and ensures optimal performance in maintaining
                      AVL tree balance:
                      <a
                        href="https://github.com/mantejl/AVL-BST"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Assignment #3 - Heap and a stack are implemented with
                      complete functionality. This includes heap operations like
                      inserting elements, extracting the minimum (or maximum)
                      element, and heapifying, as well as stack operations such
                      as pushing, popping, and accessing the top element:
                      <a
                        href="https://github.com/mantejl/Heaps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Assignment #4 - Worker scheduling algorithm is implemented
                      to schedule workers based on availability and constraints.
                      Recursive calls are used to explore different
                      possibilities, considering the availability matrix, daily
                      worker needs, and maximum shifts allowed for a daily
                      schedule. Second C++ program implements the Wordle game,
                      taking a target word, floating letters, and a word
                      dictionary. It recursively explores possible word
                      combinations, taking into account the positions of
                      floating letters:
                      <a
                        href="https://github.com/mantejl/Wordle-Scheduling"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                    <li>
                      Assignment #5 - A hash function is created for strings
                      using a custom technique, designed specifically for a hash
                      table that supports linear and double hashing probing
                      methods. Additionally, there's a C++ implementation of the
                      Boggle game, which involves searching for words on a
                      letter grid. This implementation employs recursive
                      depth-first search on the board to explore different paths
                      and form valid words:
                      <a
                        href="https://github.com/mantejl/Hashing-Recursion"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    EE 109: Introduction to Embedded Systems
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Introduction to fundamental computer systems and computer
                      engineering concepts using embedded systems, such as
                      information representations, embedded C language
                      constructs, state machines, and basic circuit analysis
                    </li>
                    <li>
                      Completed assignments that covered topics like digital
                      I/O, serial I/O protocols, analog-to-digital conversion,
                      and interrupt mechanisms
                    </li>
                    <li>
                      <a
                        href="https://github.com/mantejl/EEWork"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    ITP 116: Accelerated Programming in Python
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Explored the basics of Python programming by using data
                      structures to manage data, worked with file input/output
                      operations and practiced object-oriented programming in
                      various situations
                    </li>
                    <li>
                      Final project was a quiz about various fun facts and
                      trivia questions about USC that read in all the questions,
                      answers, and hints from a TOML file and displayed them in
                      an organized manner
                    </li>
                    <li>
                      <a
                        href="https://github.com/mantejl/IntroPython"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    WRIT 340: Advanced Writing for Engineers
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Wrote about ethical issues within engineering disciplines
                      and gained experience in creating professional proposals
                      for real-world situations, highlighting the importance of
                      engineering solutions in society.
                    </li>
                    <li>
                      <a
                        href="https://web-app.usc.edu/soc/syllabus/20173/66824.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        Fall 2017 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className="text-2xl">Spring 2022</Accordion.Title>
            <Accordion.Content>
              <ul className="list-disc pl-5 text-xl">
                <li>
                  <p className="text-2xl font-extrabold">
                    CSCI 103: Introduction to Programming
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Introduction to computer programming in C++ where I worked
                      with variables, types, loops, conditional statements,
                      functions, input/output, arrays, recursion, dynamic
                      memory, object-oriented programming, performance, and
                      several data structures.
                    </li>
                    <li>
                      C++ assignments completed that include Binary Search
                      Trees, manipulating heaps and implementing Breadth-First
                      Search algorithm for maze searching
                    </li>
                    <li>
                      <a
                        href="https://github.com/mantejl/Spring2022"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        GitHub Repository
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    CSCI 170: Discrete Methods in Computer Science
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Gained a foundational understanding of discrete methods by
                      studying informal logic, mathematical proof methods, and
                      their application in computer science.
                    </li>
                    <li>
                      Completed assignments that covered topics such as
                      elementary number theory, induction, recursion, algebra of
                      sets, counting principles, and graph algorithms.
                      algorithms.
                    </li>
                    <li>
                      <a
                        href="https://viterbi-web.usc.edu/~adamchik/170/syllabus20223.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        Fall 2022 Syllabus
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    ITP 125: From Hackers to CEOs: An Introduction to
                    Information Security
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Learned about the basics of information security by
                      studying threats to information integrity, security
                      mechanisms, policies, and their integration with business
                      and IT infrastructure
                    </li>
                    <li>
                      Labs helped us implement the basics of securing
                      workstations, networking and security technologies and a
                      final project which involved creating a Python password
                      cracking program
                    </li>
                    <li>
                      <a
                        href="https://github.com/mantejl/Spring2022/blob/main/PasswordCracking.py"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        Final Project
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="text-2xl font-extrabold">
                    MATH 225: Linear Algebra and Linear Differential Equations
                  </p>
                  <ul className="list-disc pl-5">
                    <li>
                      Studied fundamental concepts in linear algebra, such as
                      vectors, matrices, scalars, vector spaces, linear
                      transformations, eigenvalues, diagonalization, and
                      differential equations
                    </li>

                    <li>
                      <a
                        href="https://dornsife.usc.edu/mathematics/math-225-linear-algebra-and-linear-differential-equations/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600  ml-1"
                      >
                        Course Website
                      </a>
                    </li>
                  </ul>
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
