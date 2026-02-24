import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FORMSPREE_ID = "xzdaknrb";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:mantej@usc.alumni.edu" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mantejlamba/" },
  { icon: Github, label: "GitHub", href: "https://github.com/mantejl" },
];

const Contact = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <PageWrapper>
      <section className="container mx-auto px-6 py-16">
        <SectionHeading
          title="Contact"
          subtitle="Feel free to reach out!"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard>
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input name="name" placeholder="Your Name" required className="bg-secondary/50 border-white/10" />
              <Input name="email" type="email" placeholder="Your Email" required className="bg-secondary/50 border-white/10" />
              <Textarea name="message" placeholder="Your Message" rows={5} required className="bg-secondary/50 border-white/10" />
              <Button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90">
                {sending ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-white/10">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    title={s.label}
                  >
                    <Icon size={20} />
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
