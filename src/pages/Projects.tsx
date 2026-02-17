import { ExternalLink, Github } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const projects = [
  {
    name: "CloudDash",
    description: "Real-time cloud infrastructure monitoring dashboard with alerting and cost analysis.",
    tech: ["React", "TypeScript", "AWS", "D3.js"],
    github: "#",
    demo: "#",
  },
  {
    name: "NoteAI",
    description: "AI-powered note-taking app with smart tagging, search, and auto-summarization.",
    tech: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    name: "FitTrack",
    description: "Fitness tracking mobile-first PWA with workout logging, progress charts, and social features.",
    tech: ["React Native", "Firebase", "Recharts"],
    github: "#",
    demo: null,
  },
  {
    name: "DevHub",
    description: "Developer community platform with code sharing, discussions, and real-time collaboration.",
    tech: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    name: "BudgetBuddy",
    description: "Personal finance manager with expense categorization and budget forecasting.",
    tech: ["Python", "Flask", "Chart.js", "SQLite"],
    github: "#",
    demo: null,
  },
  {
    name: "PixelArt",
    description: "Browser-based pixel art editor with layers, animations, and export to sprite sheets.",
    tech: ["Canvas API", "TypeScript", "Zustand"],
    github: "#",
    demo: "#",
  },
];

const Projects = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        title="Projects"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <GlassCard
            key={i}
            delay={i * 0.1}
            className="group hover:scale-[1.03] hover:glow-primary transition-all duration-300 flex flex-col"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} /> Code
              </a>
              {project.demo && (
                <a href={project.demo} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Projects;
