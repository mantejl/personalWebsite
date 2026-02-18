import { ReactNode } from "react";
import { Briefcase, Calendar } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const experiences: {
  title: string;
  company: string;
  type: string;
  period: string;
  logo: string;
  points: ReactNode[];
}[] = [
  {
    title: "Software Engineer",
    company: "Amazon (AWS)",
    type: "Full-time",
    period: "Aug 2025 – Present",
    logo: "/logos/amazon.webp",
    points: [
      <>Currently working on building new capabilities for <a href="https://aws.amazon.com/quick/" target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:underline">Amazon QuickSuite</a>, an agentic AI-powered business intelligence platform from AWS that helps enterprises analyze data, automate workflows, and accelerate business operations</>,
      "Developed and shipped full-stack features for Quick Flows, enabling users to build automations for repetitive tasks using natural language prompts and share customizable workflows across teams",
      "Drove region expansion efforts to deploy and scale QuickSuite services into new AWS regions",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Nuna",
    type: "Internship",
    period: "May 2024 – Aug 2024",
    logo: "/logos/nuna.jpg",
    points: [
      "Developed a machine learning-based anomaly detection model to identify discrepancies in over 10,000 medical claims, rigorously testing moving average, ARIMA, SARIMA, Holt-Winters, and clustering techniques across diverse datasets",
      "Wrote robust Python code in Jupyter Notebook, utilizing PySpark for efficient data processing and Prefect for production deployment; generated insightful visualizations and stored results in S3",
      "Deployed SQL and Python scripts within production pipelines to uncover meaningful patterns and trends across large-scale healthcare datasets",
      "Productionized and deployed the anomaly detection model by end of internship, delivering actionable insights for data-driven decision making",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blackhawk Network",
    type: "Internship",
    period: "May 2023 – Aug 2023",
    logo: "/logos/bhn.png",
    points: [
      "Enhanced and developed core features for a recently built, high-performance Java-centric platform responsible for performing risk analysis on over 4,000 daily e-commerce transactions",
      "Successfully integrated a third-party device-fingerprinting system into core risk decision-making software, boosting accuracy and efficiency in detecting and preventing fraudulent purchases",
      "Developed several Java and Maven-based tools for internal teams to harness risk decision processing, with deployment facilitated through Jenkins",
      "Introduced new functionality allowing users to actively simulate risk decisions; designed and delivered software solutions using Lucidchart",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blackhawk Network",
    type: "Internship",
    period: "May 2022 – Aug 2022",
    logo: "/logos/bhn.png",
    points: [
      "Collaborated with a cross-functional team to optimize and improve a critical Risk portal by revamping Java-based backend APIs, strengthening capabilities for managing complex risk rules and real-time financial transaction authentication",
      "Implemented various enhancements for backend APIs to support the Risk portal, serving as the central hub for defining risk rules and operations",
      "Utilized Stoplight to document and maintain Swagger documentation for over 30 Risk Service APIs, ensuring clear API specifications for cross-team collaboration",
      "Created JUnit test cases and conducted thorough testing with Postman to validate and verify the functionality of enhanced REST APIs",
    ],
  },
];

const Experience = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        title="Experience"
      />

      <div className="grid gap-6 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <GlassCard key={i} delay={i * 0.1} className="hover:scale-[1.01] transition-transform duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                {exp.logo && (
                  <div className="w-10 h-10 rounded-lg bg-secondary border border-border overflow-hidden shrink-0 flex items-center justify-center">
                    <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground font-medium">
                    <Briefcase size={14} />
                    {exp.type}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="text-muted-foreground font-medium text-sm">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                <Calendar size={12} />
                {exp.period}
              </div>
            </div>
            <ul className="mt-4 space-y-2">
              {exp.points.map((point, j) => (
                <li key={j} className="text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 inline-block align-middle mr-2 shrink-0" />
                  <span className="align-middle">{point}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Experience;
