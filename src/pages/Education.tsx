import { BookOpen, Users, FolderOpen } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const coursework = [
  "Data Structures", "Algorithms", "Artificial Intelligence", "Machine Learning", "Operating Systems", "Networking",
];

const involvements = [
  "Student Researcher", "LavaLab", "ShiftSC", "Resident Assistant", "Cathartic", "CyBorg (Cybersecurity Club)", "Chess Club",
];

const projects = [
  {
    name: "Project Name",
    description: "Brief description of the project.",
  },
];

const Education = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading title="Education" />

      <div className="max-w-4xl mx-auto">
        <GlassCard delay={0.1} className="p-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border mb-4">
              <img src="/logos/usclogo.jpeg" alt="USC" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">University of Southern California</h3>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-muted-foreground font-medium text-sm">M.S. Computer Science · Jan 2024 – Dec 2025</p>
              <p className="text-muted-foreground font-medium text-sm">B.S. Computer Science · Aug 2021 – May 2025</p>
            </div>
          </div>

          {/* Coursework */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-3">
              <BookOpen size={16} /> Coursework
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {coursework.map((c) => (
                <span key={c} className="text-sm px-4 py-2 rounded-full bg-secondary text-muted-foreground">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Involvements */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Users size={16} /> Involvements
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {involvements.map((inv) => (
                <span key={inv} className="text-sm px-4 py-2 rounded-full bg-secondary text-muted-foreground">
                  {inv}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-3">
              <FolderOpen size={16} /> Projects
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.name} className="p-6 rounded-xl bg-secondary/50 border border-border/50">
                  <h4 className="text-base font-semibold text-foreground text-center">{project.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2 text-center">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  </PageWrapper>
);

export default Education;
