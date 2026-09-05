import MembershipForm from "@/components/forms/MembershipForm";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { ToastButton } from "@/components/ui/ToastButton";
import { Reveal, RevealGroup, itemVariant } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { motion } from "framer-motion";

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
{
  q: "What does membership cost?",
  a: "Annual dues total ₦250,000 (Two Hundred and Fifty Thousand Naira), covering RI per capita dues (at the prevailing RI exchange rate), District per capita dues, District Club dues (including DEWEF, PELS, RYLA, and CLLS), and Club dues.",
},
  { q: "How often do you meet?", a: "Every Tuesday at 6:30pm at the De Oasis hotels and suite, Ilaro road, Agbara estate, Agbara, Ogun State." },
  { q: "Can I visit before joining?", a: "Absolutely — guests are welcome any week, no RSVP required." },
];

export default function MembershipPage() {
  return (
    <>
      <section className="py-14">
        <Reveal>
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
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-5" stagger={0.12}>
          {benefits.map((b) => (
            <motion.div key={b.title} variants={itemVariant}>
              <TiltCard className="glass p-6 h-full">
                <h3 className="text-ink font-display text-lg">{b.title}</h3>
                <p className="text-ink-soft text-sm mt-2.5">{b.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </RevealGroup>
      </section>

      <section className="py-14">
        <Reveal>
          <div className="max-w-[640px] mb-8">
            <span className="eyebrow">Process</span>
            <h2 className="font-display text-ink text-[2rem] mt-2.5">How joining works.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="glass pl-10 pr-8 pt-8 pb-2">
            <div className="border-l-2 border-[rgba(11,42,91,0.15)] pl-6">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                  className="relative pb-7 last:pb-0"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 300, damping: 15 }}
                    className="absolute -left-[31px] top-0.5 w-3 h-3 rounded-full bg-gold shadow-[0_0_0_4px_rgba(247,168,27,0.2)]"
                  />
                  <div className="font-mono text-gold text-[0.82rem]">{s.step}</div>
                  <h4 className="text-ink mt-1 mb-1.5 font-display text-lg">{s.title}</h4>
                  <p className="text-ink-soft text-sm">{s.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-14">
        <div className="grid md:grid-cols-2 gap-5 items-start">
          <Reveal>
            <MembershipForm />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="space-y-5">
              {/* <div className="glass p-6">
                <h3 className="text-ink font-display text-lg">Membership Brochure</h3>
                <p className="text-ink-soft text-sm mt-2">
                  A short PDF covering dues, meeting schedule and committee options.
                </p>
                <ToastButton label="Download Brochure" message="Brochure download started" className="btn-ghost-light mt-3.5" />
              </div> */}
              <FaqAccordion items={miniFaq} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}