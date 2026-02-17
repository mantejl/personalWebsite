import { Music, Mountain, Gamepad2, BookOpenCheck, Utensils, Users } from "lucide-react";
import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const activities = [
  { icon: Mountain, title: "Hiking & Outdoors", description: "Weekend trail explorer. Summited 12 peaks in the Pacific Northwest.", image: true },
  { icon: Gamepad2, title: "Game Development", description: "Building indie games in Unity. Currently working on a retro platformer.", image: true },
  { icon: Music, title: "Music Production", description: "Producing lo-fi beats and ambient soundscapes in my spare time.", image: true },
  { icon: BookOpenCheck, title: "Book Club", description: "Avid reader of sci-fi and non-fiction. Running a monthly book club with friends.", image: true },
  { icon: Utensils, title: "Cooking", description: "Experimenting with fusion cuisine. Specializing in Japanese-Mexican fusion.", image: true },
  { icon: Users, title: "Open Source & Volunteering", description: "Active contributor to open-source projects and CS education nonprofits.", image: true },
];

const Activities = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        title="Activities & Hobbies"
        subtitle="What I do when I'm not writing code."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {activities.map((activity, i) => {
          const Icon = activity.icon;
          return (
            <GlassCard
              key={i}
              delay={i * 0.1}
              className="group hover:scale-[1.03] transition-transform duration-300"
            >
              {/* Image placeholder */}
              <div className="w-full h-36 rounded-lg bg-secondary mb-4 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground text-xs">Photo</span>
              </div>
              <div className="p-2.5 rounded-xl bg-secondary text-foreground w-fit mb-3 group-hover:bg-muted transition-colors">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </GlassCard>
          );
        })}
      </div>
    </section>
  </PageWrapper>
);

export default Activities;
