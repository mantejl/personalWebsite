import { Briefcase, Calendar } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const experiences = [
  {
    title: "Software Engineer",
    company: "Amazon (AWS)",
    type: "Full-time",
    period: "Aug 2025 – Present",
    logo: "/logos/amazon.webp",
    points: [
      "Led development of a customer-facing analytics dashboard serving 50K+ users",
      "Architected microservices migration reducing latency by 40%",
      "Mentored 3 junior engineers and led code review sessions",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Nuna",
    type: "Internship",
    period: "May 2024 – Aug 2024",
    logo: "/logos/nuna.jpg",
    points: [
      "Built CI/CD pipelines reducing deployment time by 60%",
      "Developed internal tooling used by 200+ engineers daily",
      "Collaborated with cross-functional teams on product features",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blackhawk Network",
    type: "Internship",
    period: "May 2023 – Aug 2023",
    logo: "/logos/bhn.png",
    points: [
      "Redesigned landing page increasing conversion rate by 25%",
      "Implemented responsive UI components with React and TypeScript",
      "Wrote comprehensive unit and integration tests",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Blackhawk Network",
    type: "Internship",
    period: "May 2022 – Aug 2022",
    logo: "/logos/bhn.png",
    points: [
      "Redesigned landing page increasing conversion rate by 25%",
      "Implemented responsive UI components with React and TypeScript",
      "Wrote comprehensive unit and integration tests",
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
                <li key={j} className="text-sm text-muted-foreground flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 mt-1.5 shrink-0" />
                  {point}
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
