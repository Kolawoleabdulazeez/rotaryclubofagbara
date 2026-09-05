import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import MissionPreview from "@/components/home/MissionPreview";
import Testimonials from "@/components/home/Testimonials";
import Sponsors from "@/components/home/Sponsors";
import Newsletter from "@/components/home/Newsletter";
import ProjectCard from "@/components/projects/ProjectCard";
import NewsCard from "@/components/news/NewsCard";
import EventRow from "@/components/events/EventRow";
import { projects, news, upcomingEvents, heroSlides } from "@/lib/data";
import Link from "next/link";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";
import MeetingCountdownCard from "@/components/events/MeetingCountdownCard";
import MeetingRow from "@/components/events/MeetingRow";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionPreview />

<Reveal>
  <div className="max-w-[640px] mb-9">
    <span className="eyebrow">Featured Projects</span>
    <h2 className="font-display text-ink text-[2rem] mt-2.5">
      Where the work is happening now.
    </h2>
  </div>
</Reveal>
<RevealGroup className="grid md:grid-cols-3 gap-5" stagger={0.12}>
  {projects.slice(0, 3).map((p) => (
    <motion.div key={p.slug} variants={itemVariant}>
      <TiltCard>
        <ProjectCard project={p} />
      </TiltCard>
    </motion.div>
  ))}
</RevealGroup>

<section className="py-14">
  <Reveal>
    <div className="max-w-[640px] mb-9">
      <span className="eyebrow">Get Involved</span>
      <h2 className="font-display text-ink text-[2rem] mt-2.5">Upcoming events.</h2>
    </div>
  </Reveal>

  <RevealGroup className="glass divide-y divide-[rgba(11,42,91,0.1)] p-2" stagger={0.12}>
  <motion.div key="weekly-meeting" variants={itemVariant}>
    <MeetingRow slide={heroSlides[0]} />
  </motion.div>

  {upcomingEvents.slice(0, 2).map((e) => (
    <motion.div key={e.slug} variants={itemVariant}>
      <EventRow event={e} />
    </motion.div>
  ))}
</RevealGroup>


  <Reveal delay={0.15}>
    <div className="mt-5">
      <Link href="/events" className="btn-ghost-light">
        View All Events →
      </Link>
    </div>
  </Reveal>
</section>
      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">In The News</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">Latest from the club.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {news.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </section>

      <Testimonials />
      {/* <Sponsors /> */}
      <Newsletter />
    </>
  );
}
