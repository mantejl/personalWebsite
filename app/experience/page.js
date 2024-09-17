"use client";

import React from "react";
import { Timeline } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const customTheme = {
  timeline: {
    item: {
      content: {
        time: {
          base: "text-xl text-gray-400 dark:text-gray-500 pl-2",
        },
        body: {
          base: "mb-4 text-lg font-normal text-gray-500 dark:text-gray-400",
        },
        title: {
          base: "text-xl font-semibold text-gray-900 dark:text-white pl-2",
        },
      },
      point: {
        marker: {
          icon: {
            base: "h-9 w-9 text-blue-900 ",
            wrapper:
              "absolute -left-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-200",
          },
        },
      },
    },
  },
};

const ExperiencePage = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="ml-16 mr-8 mt-10">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>May 2024 - Aug 2024</Timeline.Time>
              <Timeline.Title>
                Software Engineer Intern at Nuna Inc
              </Timeline.Title>
              <Timeline.Body>
                <ul className="ml-4">
                  <li>
                    → Worked within the Risk team to enhance and develop core
                    features for a recently developed Java-centric platform
                    responsible for performing risk analysis on e-commerce
                    transactions
                  </li>
                  <li>
                    → Successfully completed the integration of a third-party
                    device fingerprinting system into the core software that
                    drives our risk assessment decisions
                  </li>
                  <li>
                    → Developed several Java and Maven-based tools for internal
                    teams to harness our risk decision processing, with
                    deployment facilitated through Jenkins
                  </li>
                  <li>
                    → Introduced a new functionality that allows users to
                    actively simulate risk decisions
                  </li>
                  <li>
                    → Designed and delivered a successful software design
                    solution using Lucidchart
                  </li>
                  <li>
                    → Strategically tested newly built features using tools such
                    as SoapUI and MongoDB Compass
                  </li>
                  <li>
                    → Tech Stack: Python, SQL, Databricks, Jupyter Notebook,
                    PySpark, Prefect
                  </li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>May 2023 - Aug 2023</Timeline.Time>
              <Timeline.Title>
                Software Engineer Intern at Blackhawk Network
              </Timeline.Title>
              <Timeline.Body>
                <ul className="ml-4">
                  <li>
                    → Worked within the Risk team to enhance and develop core
                    features for a recently developed Java-centric platform
                    responsible for performing risk analysis on e-commerce
                    transactions
                  </li>
                  <li>
                    → Successfully completed the integration of a third-party
                    device fingerprinting system into the core software that
                    drives our risk assessment decisions
                  </li>
                  <li>
                    → Developed several Java and Maven-based tools for internal
                    teams to harness our risk decision processing, with
                    deployment facilitated through Jenkins
                  </li>
                  <li>
                    → Introduced a new functionality that allows users to
                    actively simulate risk decisions
                  </li>
                  <li>
                    → Designed and delivered a successful software design
                    solution using Lucidchart
                  </li>
                  <li>
                    → Strategically tested newly built features using tools such
                    as SoapUI and MongoDB Compass
                  </li>
                  <li>
                    → Tech Stack: Java, Maven, Jenkins, Git, REST APIs, MongoDB,
                    Postman
                  </li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>May 2022 - Aug 2022</Timeline.Time>
              <Timeline.Title>
                Software Engineer Intern at Blackhawk Network
              </Timeline.Title>
              <Timeline.Body>
                <ul className="ml-4">
                  <li>
                    → Collaborated with a cross-functional team to develop and
                    maintain the Risk Management Service platform, which played
                    a crucial role in making real-time decisions to authenticate
                    financial transactions
                  </li>
                  <li>
                    → Implemented various enhancements for backend APIs to
                    support the Risk portal, which served as the central hub for
                    defining Risk rules and operations
                  </li>
                  <li>
                    → Utilized the Stoplight tool to document and maintain
                    Swagger documentation for over 30 Risk Service APIs,
                    ensuring clear API specifications for collaboration with
                    other teams
                  </li>
                  <li>
                    → Gained experience in software testing by creating JUnit
                    test cases to validate and verify the functionality of
                    enhanced features
                  </li>
                  <li>
                    → Conducted thorough testing using Postman to ensure the
                    proper functioning of REST APIs
                  </li>
                  <li>→ Tech Stack: Java, Spring Boot, JUnit, Git, Maven</li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>Aug 2021 - Dec 2021</Timeline.Time>
              <Timeline.Title>Lead Tutor at Code Ninjas</Timeline.Title>
              <Timeline.Body>
                <ul className="ml-4">
                  <li>
                    → Conducted classes and camps focused on teaching
                    fundamental computer programming concepts to children using
                    interactive games and engaging activities.
                  </li>
                  <li>
                    → Assisted older students in the completion of their
                    JavaScript projects, providing guidance and support
                    throughout the process
                  </li>
                  <li>
                    → Worked with younger children, introducing them to
                    programming concepts through the use of Scratch and Scratch
                    Jr. platforms
                  </li>
                  <li>→ Tech Stack: Python, HTML, CSS, JavaScript</li>
                </ul>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </Flowbite>
  );
};

export default ExperiencePage;
