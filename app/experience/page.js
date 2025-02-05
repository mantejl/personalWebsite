"use client";

import React from "react";
import { Timeline } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

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
    },
  },
};


const ExperiencePage = () => {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div className="ml-16 mr-8 mt-10">
        <Timeline>
          <Timeline.Item>
              <div className="flex items-center space-x-2">
                <img
                  src="/nunaLogo.png"
                  alt="Nuna Logo"
                  className="h-16 w-16 object-cover rounded-full"
                />
              </div>
            <Timeline.Content>
              <Timeline.Time>May 2024 - Aug 2024</Timeline.Time>
              <Timeline.Title>
                Software Engineer Intern at Nuna
              </Timeline.Title>
              <Timeline.Body>
                <ul className="ml-4">
                  <li>
                    → Designed and implemented a machine learning-based anomaly detection model to identify 
                    discrepancies between incurred and paid dates in medical claims, evaluating techniques like moving average, 
                    ARIMA, SARIMA, Holt-Winters, and clustering across multiple datasets
                  </li>
                  <li>
                    → Conducted extensive exploratory data analysis to identify patterns and trends in claims data, refining feature selection and engineering for enhanced model accuracy
                  </li>
                  <li>
                    → Deployed the solution using Prefect, establishing seamless integration 
                    into production workflows with automated monitoring and error handling
                  </li>
                  <li>
                    → Developed weighted average datasets and performed advanced statistical analysis during the project's final phase, generating detailed insights 
                    and recommendations while storing results in S3 for reporting and future use
                  </li>
                  <li>
                    → Collaborated with cross-functional teams, including data scientists and engineers, to align technical solutions with business objectives 
                  </li>
                  <li>
                    → Built and optimized the model in both Jupyter and Databricks environments, 
                    utilizing PySpark for large-scale data processing
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
          <div className="absolute -left-12 -top-4">
              <img
                src="/blackhawkLogo.jpeg" 
                alt="Blackhawk Logo"
                className="h-16 w-16 object-cover rounded-full"
              />
          </div>
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
