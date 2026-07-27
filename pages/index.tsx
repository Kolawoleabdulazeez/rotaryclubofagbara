import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import MissionPreview from "@/components/home/MissionPreview";
import Testimonials from "@/components/home/Testimonials";
import Sponsors from "@/components/home/Sponsors";
import Newsletter from "@/components/home/Newsletter";
import ProjectCard from "@/components/projects/ProjectCard";
import NewsCard from "@/components/news/NewsCard";
import EventRow from "@/components/events/EventRow";
import { projects, news, upcomingEvents } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionPreview />

      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Featured Projects</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            Where the work is happening now.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Get Involved</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">Upcoming events.</h2>
        </div>
        <div className="glass divide-y divide-[rgba(11,42,91,0.1)] p-2">
          {upcomingEvents.slice(0, 2).map((e) => (
            <EventRow key={e.slug} event={e} />
          ))}
        </div>
        <div className="mt-5">
          <Link href="/events" className="btn-ghost-light">
            View All Events →
          </Link>
        </div>
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
      <Sponsors />
      <Newsletter />
    </>
  );
}
