import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import GlassCard from "@/components/GlassCard";

const Index = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-6">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-muted/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-muted/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="text-center relative z-10 max-w-4xl mx-auto">
          {/* Header Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto border-2 border-border overflow-hidden">
              <img src="/headshot.jpeg" alt="Mantej" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Mantej</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Software Engineer passionate about building secure, intelligent systems with real-world impact
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-foreground text-background font-semibold transition-all hover:scale-105 hover:bg-foreground/90"
            >
              View My Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl glass-card font-semibold text-foreground transition-all hover:scale-105 hover:bg-secondary/60"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Me */}
      <section className="container mx-auto px-6 pb-24">
        <GlassCard className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-foreground text-center">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
          I am a Software Engineer with experience in full-stack development, machine learning, 
          and data-driven applications. Beyond my current work, I'm especially interested in cybersecurity, applied AI/ML, 
          and the challenges that come with building in startup environments. In my free time, I enjoy playing basketball, chess, video games, and 
          exploring new places. 

          </p>
        </GlassCard>
      </section>
    </PageWrapper>
  );
};

export default Index;
