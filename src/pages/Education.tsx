import { Lightbulb, Users, FolderOpen } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const courses = [
  { name: "Film Symposium", link: "https://www.trojans360.com/trojans360posts/my-favorite-class-ive-taken-at-usc-ctcs-466" },
  { name: "Chess & Critical Thinking", link: "https://dornsife.usc.edu/news/stories/chess-class-teaches-students-how-to-master-the-mind/" },
  { name: "Global Narratives of Illness & Disability", link: "https://dailytrojan.com/2020/09/01/intersection-of-health-and-humanities-at-usc-needed-more-than-ever/" },
  { name: "Tech Startup Playbook" },
  { name: "Sports Public Relations" },
  { name: "Essentials to Adulting" },
  { name: "The Science of Sport" },
];

const involvements = [
  { name: "ShiftSC", link: "https://aie-website.vercel.app/" },
  { name: "LavaLab", link: "https://usclavalab.org/#about" },
  { name: "Undergraduate Researcher" },
  { name: "Cathartic", link: "https://www.cathartichealth.org/about-us/index.html" },
  { name: "Resident Assistant" },
  { name: "CyBorg", link: "https://usccyb.org/" },
  { name: "Chess Club" }
];

const projects = [
  {
    name: "NBA Optimal Lineup Selection",
    description: "Deep learning system that predicts optimal NBA five-player lineups by modeling player synergies, role balance, and statistical performance using PyTorch neural networks trained on real NBA data.",
    tech: ["Python", "PyTorch", "Scikit-learn", "Pandas"],
  },
  {
    name: "Deep Learning Image Classification",
    description: "Built and compared CNN architectures (ResNet50, ResNet101, EfficientNetB0, VGG16) for multi-class scene classification across six categories, leveraging transfer learning and data augmentation.",
    tech: ["Python", "TensorFlow", "Keras", "NumPy"],
  },
  {
    name: "Named Entity Recognition",
    description: "Developed a Bidirectional LSTM model for Named Entity Recognition on the CoNLL-2003 dataset, implementing both learned and GloVe pre-trained word embeddings to identify and classify entities such as persons, organizations, and locations.",
    tech: ["Python", "PyTorch", "NLP", "GloVe"],
  },
  {
    name: "Network Vulnerability Assessment",
    description: "Conducted a penetration test and vulnerability assessment across multiple network subnets using Nessus, identifying 31 vulnerabilities including NFS disclosure, XSS, clickjacking, and SSH weaknesses. Delivered a professional remediation report with CVSS-based prioritization.",
    tech: ["Nessus", "Kali Linux", "CVSS", "NFS", "SSH"],
  },
  {
    name: "Video Streaming CDN & Reliable Transport",
    description: "Implemented an adaptive bitrate HTTP proxy and DNS load balancer for video streaming over a simulated CDN, alongside a custom reliable transport protocol (WTP) built on top of UDP with in-order delivery, loss recovery, and CRC-based integrity checks.",
    tech: ["C++", "UDP", "DNS", "HTTP Proxy", "Mininet"],
  },
  {
    name: "ML Classification & Regression Pipeline",
    description: "Implemented Perceptron, Decision Tree, and Feedforward Neural Network models on real-world datasets including banknote authentication, car evaluation, and abalone ring prediction. Evaluated performance through accuracy metrics, decision boundary visualization, and hyperparameter tuning.",
    tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    name: "Data Aggregation Platform (Senior Project)",
    description: "Built an automated data pipeline and cron-based system that pulls membership, order, and transaction data from Squarespace, PayPal, and Stripe APIs, consolidates it into a PostgreSQL database, and generates financial analytics dashboards with monthly and year-to-date reporting.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Stripe"],
  },
  {
    name: "Drone-to-Drone UAS Interceptor",
    description: "Designed a compact, rapidly deployable UAS interceptor for a Department of Defense-sponsored project to neutralize hostile drones in close-range scenarios. Evaluated advanced flight controllers, sensor arrays, and real-time terminal guidance to deliver a full hardware prototype specification.",
    tech: ["Pixhawk", "Ardupilot", "Gazebo", "Python", "FPV"],
  },
];

const Education = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading title="Education" />

      <div className="max-w-4xl mx-auto">
        <GlassCard delay={0.1} className="p-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-border mb-4">
              <img src="/logos/usclogo.jpeg" alt="USC" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">University of Southern California</h3>
            <div className="mt-1.5 space-y-0.5">
              <p className="text-muted-foreground font-medium text-sm">Bachelor of Science in Computer Science · Aug 2021 – May 2025</p>
              <p className="text-muted-foreground font-medium text-sm">Master of Science in Computer Science · Jan 2024 – May 2025</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-1">
              <Lightbulb size={24} /> Memorable Courses
            </div>
            <p className="text-xs text-muted-foreground text-center mb-3 italic pt-2">classes that made my USC experience special :)</p>
            <div className="flex flex-wrap justify-center gap-3">
              {courses.map((c) => (
                c.link ? (
                  <a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer" className="text-xs px-4 py-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                    {c.name}
                  </a>
                ) : (
                  <span key={c.name} className="text-xs px-4 py-2 rounded-full bg-secondary text-muted-foreground">
                    {c.name}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Involvements */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-3">
              <Users size={24} /> Involvements
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {involvements.map((inv) => (
                inv.link ? (
                  <a key={inv.name} href={inv.link} target="_blank" rel="noopener noreferrer" className="text-xs px-4 py-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors">
                    {inv.name}
                  </a>
                ) : (
                  <span key={inv.name} className="text-xs px-4 py-2 rounded-full bg-secondary text-muted-foreground">
                    {inv.name}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-foreground mb-3">
              <FolderOpen size={24} /> Notable Projects
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div key={project.name} className="p-5 rounded-xl bg-secondary/50 border border-border/50 flex flex-col">
                  <h4 className="text-sm font-semibold text-foreground text-center mb-2">{project.name}</h4>
                  <p className="text-xs text-muted-foreground text-center flex-1">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-background/50 text-muted-foreground border border-border/50">
                        {t}
                      </span>
                    ))}
                  </div>
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
