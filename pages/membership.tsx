// MembershipPage.tsx
import MembershipForm from "@/components/forms/MembershipForm";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { ToastButton } from "@/components/ui/ToastButton";

const benefits = [
  {
    title: "Benefits",
    body: "Weekly fellowship, leadership development, a global network across 200+ countries, and direct hands-on project work.",
  },
  {
    title: "Responsibilities",
    body: "Attend weekly meetings, contribute to at least one active committee, and uphold the Four-Way Test in your professional life.",
  },
  {
    title: "Eligibility",
    body: "Open to adults of good character and professional standing, sponsored by a current member or by application review.",
  },
];

const steps = [
  { step: "Step 1", title: "Attend as a guest", body: "Come to two meetings — no obligation, just coffee and conversation." },
  { step: "Step 2", title: "Submit your inquiry", body: "Use the form below; a board member will follow up within a week." },
  { step: "Step 3", title: "Meet the membership committee", body: "A short, friendly conversation about your background and interests." },
  { step: "Step 4", title: "Induction", body: "Get your pin and badge at our next induction ceremony." },
];

const miniFaq = [
  { q: "What does membership cost?", a: "Quarterly dues cover meals, district fees and administration — full details are in the brochure." },
  { q: "How often do you meet?", a: "Every Tuesday at 7:30am at the Agbara Community Hall." },
  { q: "Can I visit before joining?", a: "Absolutely — guests are welcome any week, no RSVP required." },
];

export default function MembershipPage() {
  return (
    <>
      <section className="py-14">
        <div className="max-w-[640px] mb-9">
          <span className="eyebrow">Become a Member</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">
            Bring your skills to the table.
          </h2>
          <p className="text-ink-soft mt-3">
            Membership is by classification — one person per profession or trade — so
            every meeting brings a genuinely useful mix of people.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {benefits.map((b) => (
            <div key={b.title} className="glass p-6">
              <h3 className="text-ink font-display text-lg">{b.title}</h3>
              <p className="text-ink-soft text-sm mt-2.5">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-[640px] mb-8">
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-ink text-[2rem] mt-2.5">How joining works.</h2>
        </div>
        <div className="glass pl-10 pr-8 pt-8 pb-2">
          <div className="border-l-2 border-[rgba(11,42,91,0.15)] pl-6">
            {steps.map((s) => (
              <div key={s.step} className="relative pb-7 last:pb-0">
                <div className="absolute -left-[31px] top-0.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(247,168,27,0.2)]" />
                <div className="font-mono text-gold text-[0.82rem]">{s.step}</div>
                <h4 className="text-ink mt-1 mb-1.5 font-display text-lg">{s.title}</h4>
                <p className="text-ink-soft text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <MembershipForm />
          <div className="space-y-5">
            <div className="glass p-6">
              <h3 className="text-ink font-display text-lg">Membership Brochure</h3>
              <p className="text-ink-soft text-sm mt-2">
                A short PDF covering dues, meeting schedule and committee options.
              </p>
              <ToastButton label="Download Brochure" message="Brochure download started" className="btn-ghost-light mt-3.5" />
            </div>
            <FaqAccordion items={miniFaq} />
          </div>
        </div>
      </section>
    </>
  );
}