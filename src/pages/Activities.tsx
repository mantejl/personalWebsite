import PageWrapper from "@/components/PageWrapper";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";

const activities = [
  { title: "Hiking & Outdoors", description: "Weekend trail explorer. Summited 12 peaks in the Pacific Northwest.", image: true },
  { title: "Game Development", description: "Building indie games in Unity. Currently working on a retro platformer.", image: true },
  { title: "Music Production", description: "Producing lo-fi beats and ambient soundscapes in my spare time.", image: true },
  { title: "Book Club", description: "Avid reader of sci-fi and non-fiction. Running a monthly book club with friends.", image: true },
  { title: "Cooking", description: "Experimenting with fusion cuisine. Specializing in Japanese-Mexican fusion.", image: true },
  { title: "Open Source & Volunteering", description: "Active contributor to open-source projects and CS education nonprofits.", image: true },
];

const Activities = () => (
  <PageWrapper>
    <section className="container mx-auto px-6 py-16">
      <SectionHeading
        title="Activities & Hobbies"
        subtitle="What I do when I'm not writing code."
      />

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {activities.map((activity, i) => (
            <GlassCard
              key={i}
              delay={i * 0.1}
              className="group hover:scale-[1.03] transition-transform duration-300 flex flex-col items-center text-center p-8"
            >
              {/* Image placeholder */}
              <div className="w-full h-44 rounded-lg bg-secondary mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-muted-foreground text-xs">Photo</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{activity.title}</h3>
              <p className="text-base text-muted-foreground">{activity.description}</p>
            </GlassCard>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Activities;
