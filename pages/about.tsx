import Timeline from "@/components/about/Timeline";
import LeadershipGrid from "@/components/about/LeadershipGrid";

const values = ["Fellowship", "Integrity", "Diversity", "Service"];

export default function AboutPage() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">About Us</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            Six decades of showing up.
          </h2>
          <p className="text-ink-soft mt-3">
            What started as twelve local business owners meeting over breakfast is now
            a 184-member chapter spanning every corner of Agbara&apos;s professional
            community.
          </p>
        </div>
        <Timeline />
      </section>

      <section className="py-14">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass p-7">
            <span className="eyebrow">Mission</span>
            <h3 className="font-display text-ink text-xl mt-2.5">
              We provide service to others, promote integrity, and advance world
              understanding, goodwill and peace through our fellowship.
            </h3>
          </div>
          <div className="glass p-7">
            <span className="eyebrow">Vision</span>
            <h3 className="font-display text-ink text-xl mt-2.5">
              Together, we see a world where people unite and take action to create
              lasting change — across the globe, in our communities, and in ourselves.
            </h3>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-[640px] mb-8">
          <span className="eyebrow">Core Values</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            What guides every decision.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={v} className="glass p-5 text-center">
              <div className="font-mono text-gold text-xs">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="text-ink mt-2 font-display">{v}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="glass px-8 py-8">
          <span className="eyebrow">Our Ethical Standard</span>
          <h2 className="font-display text-ink text-2xl mt-2.5">The Four-Way Test</h2>
          <p className="text-ink-soft mt-2 text-sm">Of the things we think, say or do:</p>
          <ol className="mt-3.5 space-y-2.5 text-ink-soft list-decimal list-inside">
            <li>Is it the TRUTH?</li>
            <li>Is it FAIR to all concerned?</li>
            <li>Will it build GOODWILL and better friendships?</li>
            <li>Will it be BENEFICIAL to all concerned?</li>
          </ol>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Leadership</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">This year&apos;s board.</h2>
        </div>
        <LeadershipGrid />
      </section>

      <section className="py-14">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass p-6">
            <span className="eyebrow">Affiliations</span>
            <p className="text-ink-soft mt-3 text-sm">
              Rotary International · District 9110 · Agbara Chamber of Commerce ·
              United Way of Agbara
            </p>
          </div>
          <div className="glass p-6">
            <span className="eyebrow">Awards & Recognition</span>
            <p className="text-ink-soft mt-3 text-sm">
              District Presidential Citation (2022, 2023) · Rotary Foundation Top
              Contributing Club, District 9110 (2024)
            </p>
          </div>
        </div>
      </section>
    </>
  );
}