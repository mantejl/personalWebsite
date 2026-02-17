import { GraduationCap, Award, BookOpen, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const schools = [
  {
    name: "University of Technology",
    degree: "B.S. in Computer Science",
    period: "2020 – 2024",
    gpa: "3.85 / 4.0",
    coursework: ["Data Structures & Algorithms", "Machine Learning", "Distributed Systems", "Database Design"],
    achievements: ["Dean's List (6 semesters)", "CS Department Honors", "Hackathon Winner 2023"],
    involvements: [
      { name: "ACM Student Chapter", role: "Vice President" },
      { name: "Hack Club", role: "Project Lead" },
      { name: "CS Tutoring Center", role: "Tutor" },
      { name: "Intramural Soccer", role: "Team Captain" },
    ],
  },
  {
    name: "Springfield High School",
    degree: "High School Diploma",
    period: "2016 – 2020",
    gpa: "4.0 / 4.0",
    coursework: ["AP Computer Science", "AP Calculus BC", "AP Physics"],
    achievements: ["Valedictorian", "National Merit Scholar", "Robotics Club President"],
    involvements: [
      { name: "Robotics Club", role: "President" },
      { name: "Math Olympiad Team", role: "Captain" },
      { name: "Student Government", role: "Treasurer" },
    ],
  },
];

const Education = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        title="Education"
      />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {schools.map((school, i) => (
          <GlassCard key={i} delay={i * 0.15} className="hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-secondary text-foreground shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{school.name}</h3>
                <p className="text-muted-foreground font-medium text-sm">{school.degree}</p>
                <p className="text-muted-foreground text-xs">{school.period} · GPA: {school.gpa}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <BookOpen size={14} /> Coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {school.coursework.map((c) => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Award size={14} /> Achievements
              </div>
              <ul className="space-y-1">
                {school.achievements.map((a) => (
                  <li key={a} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-foreground/40">✦</span> {a}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Users size={14} /> Involvements & ECs
              </div>
              <ul className="space-y-1.5">
                {school.involvements.map((inv) => (
                  <li key={inv.name} className="text-sm text-muted-foreground flex justify-between">
                    <span>{inv.name}</span>
                    <span className="text-xs text-muted-foreground/70">{inv.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Education;
