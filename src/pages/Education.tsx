import { BookOpen, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const schools = [
  {
    name: "University of Southern California",
    degree: "Bachelor of Science in Computer Science",
    period: "Aug 2021 – May 2025",
    coursework: ["Data Structures", "Algorithms", "Artificial Intelligence", "Machine Learning", "Operating Systems", "Networking"],
    involvements: [
      { name: "LavaLab" },
      { name: "ShiftSC" },
      { name: "Resident Assistant" },
      { name: "Cathartic" },
      { name: "Chess Club" },
    ],
  },
  {
    name: "University of Southern California",
    degree: "Master of Science in Computer Science",
    period: "Jan 2024 – Dec 2025",
    coursework: ["Algorithms", "Artificial Intelligence", "Machine Learning", "Operating Systems", "Networking"],
    involvements: [
      { name: "Student Researcher" },
      { name: "LavaLab" },
      { name: "CyBorg (Cybersecurity Club)" },
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
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-border">
                <img src="/logos/usclogo.jpeg" alt="USC" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{school.name}</h3>
                <p className="text-muted-foreground font-medium text-sm">{school.degree}</p>
                <p className="text-muted-foreground text-xs font-bold">{school.period}</p>
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

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <Users size={14} /> Involvements
              </div>
              <div className="flex flex-wrap gap-2">
                {school.involvements.map((inv) => (
                  <span key={inv.name} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                    {inv.name}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Education;
