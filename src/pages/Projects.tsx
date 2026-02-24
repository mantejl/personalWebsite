import { ExternalLink, Github } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

interface ProjectItem {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  linkLabel?: string;
}

const projects: ProjectItem[] = [
  {
    name: "Security Observability Stack",
    description:
      "currently building....",
    tech: [],
  },
  {
    name: "Cattail",
    description:
      "A platform for freelance designers to streamline projects. Clients submit intake forms, artists can accept, refer, or decline, and accepted projects include a Kanban board, moodboard, file storage, and chat. Built during LavaLab's Fall 2023 Cohort.",
    tech: ["React", "Next.js", "Tailwind", "Firebase"],
    github: "https://github.com/mantejl/cattail",
    link: "https://cattail.vercel.app",
    linkLabel: "Demo",
  },
  {
    name: "AI Ethics Curriculum",
    description:
      "Led the ShiftSC team at USC in building an AI Ethics curriculum with video lectures, hands-on labs, and Colab notebooks on responsible AI development, bias detection, and ethical decision-making in machine learning systems.",
    tech: ["AI/ML", "Education", "Google Colab"],
    link: "https://aie-website.vercel.app/curriculum",
    linkLabel: "Curriculum",
  },
  {
    name: "DriveX",
    description:
      "A safe night driving tool with real-time drowsiness detection via live camera, triggering alerts on fatigue. Includes a voice-based driving assistant to keep drivers engaged and alert.",
    tech: ["Computer Vision", "Real-time Alerts", "AI"],
    link: "https://devpost.com/software/drivex-ouwghk",
    linkLabel: "Devpost",
  },
  {
    name: "Cybersecurity Audio Show",
    description:
      "Produced and hosted a six-episode podcast exploring cybersecurity in daily life, from personal digital security and password hygiene to national security challenges, and evolving cyber threat landscape",
    tech: ["Podcast", "Cybersecurity"],
    link: "https://creators.spotify.com/pod/profile/mantej-lamba/",
    linkLabel: "Spotify",
  },
  {
    name: "Cards for COVID Heroes",
    description:
      "Co-founded a COVID-19 initiative to thank frontline healthcare workers. Collected over 2,100 cards and delivered them to hospitals nationwide, with gift cards sponsored by Blackhawk Network.",
    tech: ["Community Initiative"],
    link: "https://cards4covidheroes.com/",
    linkLabel: "Website",
  },
];

const Projects = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading title="Projects" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <GlassCard
            key={i}
            delay={i * 0.1}
            className="group hover:scale-[1.03] hover:glow-primary transition-all duration-300 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={16} /> Code
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink size={16} /> {project.linkLabel || "Link"}
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
