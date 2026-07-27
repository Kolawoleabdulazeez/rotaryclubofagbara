export type Project = {
  slug: string;
  category:
    | "Water"
    | "Education"
    | "Health"
    | "Environment"
    | "Youth"
    | "Economic Development";
  status: "active" | "complete";
  title: string;
  desc: string;
  year: number;
  image: string; // placeholder path, swap with real image later
};

export const projects: Project[] = [
  {
    slug: "water-for-agbara-phase-4",
    category: "Water",
    status: "active",
    title: "Water for Agbara — Phase 4",
    desc: "Two new boreholes serving the Eastern Ward, expected completion Q4 2026.",
    year: 2026,
    image: "/images/projects/water-phase-4.jpg",
  },
  {
    slug: "bright-futures-scholarship",
    category: "Education",
    status: "active",
    title: "Bright Futures Scholarship Fund",
    desc: "Annual scholarships for 12 secondary school graduates entering university.",
    year: 2026,
    image: "/images/projects/scholarship-fund.jpg",
  },
  {
    slug: "mobile-maternal-clinic",
    category: "Health",
    status: "complete",
    title: "Mobile Maternal Health Clinic",
    desc: "A retrofitted van bringing prenatal checkups to three rural wards.",
    year: 2025,
    image: "/images/projects/maternal-clinic.jpg",
  },
  {
    slug: "shoreline-restoration",
    category: "Environment",
    status: "active",
    title: "Agbara Shoreline Restoration",
    desc: "Mangrove replanting and shoreline cleanup with 40 volunteer families.",
    year: 2026,
    image: "/images/projects/shoreline.jpg",
  },
  {
    slug: "ryla-leadership-camp",
    category: "Youth",
    status: "active",
    title: "RYLA Leadership Camp",
    desc: "A weekend leadership program for 60 local high schoolers each summer.",
    year: 2026,
    image: "/images/projects/ryla-camp.jpg",
  },
  {
    slug: "microloan-circle",
    category: "Economic Development",
    status: "complete",
    title: "Microloan Circle for Market Women",
    desc: "Seed capital and bookkeeping training for 30 market vendors.",
    year: 2024,
    image: "/images/projects/microloan-circle.jpg",
  },
];

export type EventItem = {
  slug: string;
  day: string;
  month: string;
  title: string;
  venue: string;
  time: string;
  image: string;
};

export const upcomingEvents: EventItem[] = [
  {
    slug: "annual-charity-gala",
    day: "12",
    month: "Aug",
    title: "Annual Charity Gala",
    venue: "Agbara Grand Hotel",
    time: "6:30 PM",
    image: "/images/events/charity-gala.jpg",
  },
  {
    slug: "borehole-groundbreaking",
    day: "22",
    month: "Aug",
    title: "Borehole Groundbreaking — Eastern Ward",
    venue: "Eastern Ward Community Field",
    time: "9:00 AM",
    image: "/images/events/groundbreaking.jpg",
  },
  {
    slug: "membership-open-house",
    day: "05",
    month: "Sep",
    title: "Membership Open House",
    venue: "Agbara Community Hall",
    time: "7:30 AM",
    image: "/images/events/open-house.jpg",
  },
];

export const pastEvents: EventItem[] = [
  {
    slug: "shoreline-cleanup-day",
    day: "14",
    month: "May",
    title: "Shoreline Cleanup Day",
    venue: "Agbara Waterfront",
    time: "8:00 AM",
    image: "/images/events/cleanup-day.jpg",
  },
  {
    slug: "district-conference-9110",
    day: "02",
    month: "Mar",
    title: "District Conference 9110",
    venue: "Meridian Convention Center",
    time: "All Day",
    image: "/images/events/district-conference.jpg",
  },
];

export type NewsItem = {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    slug: "phase-3-boreholes",
    tag: "Impact",
    title: "Phase 3 Boreholes Now Serving 4,000 Residents",
    desc: "The Eastern Ward project crossed its first full year of operation with zero downtime.",
    image: "/images/news/phase-3-boreholes.jpg",
  },
  {
    slug: "new-members-welcome",
    tag: "Club News",
    title: "Club Welcomes 14 New Members This Quarter",
    desc: "Our largest induction class in a decade, spanning six professional classifications.",
    image: "/images/news/new-members.jpg",
  },
  {
    slug: "top-contributing-club",
    tag: "Recognition",
    title: "District Names Us Top Contributing Club",
    desc: "Second year running, our Foundation giving led District 9110.",
    image: "/images/news/top-contributing-club.jpg",
  },
];

export type Leader = {
  name: string;
  role: string;
  bio: string;
  photo: string;
};

export const leaders: Leader[] = [
  { name: "Adaeze Nwosu", role: "President", bio: "15-year member, healthcare administrator.", photo: "/images/leaders/adaeze-nwosu.jpg" },
  { name: "Tunde Bakare", role: "President-Elect", bio: "Civil engineer, leads the Water for Agbara program.", photo: "/images/leaders/tunde-bakare.jpg" },
  { name: "Miriam Osei", role: "Secretary", bio: "Attorney, joined in 2018.", photo: "/images/leaders/miriam-osei.jpg" },
  { name: "James Okoro", role: "Treasurer", bio: "CPA and small-business owner.", photo: "/images/leaders/james-okoro.jpg" },
  { name: "Farida Musa", role: "Director, Youth Programs", bio: "Runs the RYLA and Interact partnerships.", photo: "/images/leaders/farida-musa.jpg" },
  { name: "Chuka Eze", role: "Director, Community Service", bio: "Coordinates all local project committees.", photo: "/images/leaders/chuka-eze.jpg" },
];

export const testimonials = [
  {
    quote:
      "The scholarship from this club changed the direction of my entire career. I wouldn't have finished my degree without it.",
    name: "Ifeoma A.",
    role: "Scholarship Recipient",
    photo: "/images/testimonials/ifeoma-a.jpg",
  },
  {
    quote:
      "Working with this club on the borehole project was seamless — transparent budgeting, real follow-through.",
    name: "Grace Community Trust",
    role: "Partner NGO",
    photo: "/images/testimonials/grace-community-trust.jpg",
  },
  {
    quote:
      "I joined for the networking. I stayed for the Tuesday mornings spent actually fixing things that matter.",
    name: "Daniel K.",
    role: "Member since 2021",
    photo: "/images/testimonials/daniel-k.jpg",
  },
];

export const sponsors = [
  "Agbara General Hospital",
  "Northbridge Water Trust",
  "Meridian Bank",
  "Coastal Grain Co.",
  "District 9110",
];

export const faqs = [
  {
    q: "Is this website a member login portal?",
    a: "No — this site is public-facing only. Member scheduling and internal tools live on a separate private system.",
  },
  {
    q: "How do I register for an event?",
    a: "Open the Events page and use the Register button on any upcoming listing.",
  },
  {
    q: "Are donations tax-deductible?",
    a: "In most jurisdictions, yes. Check the Donate page for full tax details for your region.",
  },
  {
    q: "Can non-members attend project days?",
    a: "Yes — most hands-on project days are open to community volunteers, listed on the Events page.",
  },
];

export const timeline = [
  { year: "1961", title: "Club Chartered", desc: "Twelve founding members receive their charter from Rotary International District 91." },
  { year: "1984", title: "First International Project", desc: "Partnered with a sister club in Kaduna to fund a rural primary school." },
  { year: "2003", title: "Water for Agbara Launch", desc: "Long-running clean water initiative begins, now serving 14 communities." },
  { year: "2016", title: "Rotaract Chapter Founded", desc: "Young professionals branch launched to grow the next generation of members." },
  { year: "2024", title: "$2M Lifetime Giving", desc: "Club crosses two million dollars raised across all humanitarian programs." },
];
