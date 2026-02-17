import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! (This is a placeholder)");
  };

  return (
    <PageWrapper>
      <section className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect — feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard>
            <h3 className="text-xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input placeholder="Your Name" className="bg-secondary/50 border-white/10" />
              <Input type="email" placeholder="Your Email" className="bg-secondary/50 border-white/10" />
              <Textarea placeholder="Your Message" rows={5} className="bg-secondary/50 border-white/10" />
              <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                Send Message
              </Button>
            </form>
          </GlassCard>

          <GlassCard className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-foreground mb-6">Find Me Online</h3>
            <div className="space-y-4">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} />
                    </div>
                    <span className="text-foreground font-medium">{s.label}</span>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
