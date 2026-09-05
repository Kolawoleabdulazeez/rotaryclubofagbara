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
    title: "Fundraising and Investiture Ceremony",
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
  }
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


// lib/data.ts
export type MeetingSlide = {
  type: "meeting";
  title: string;
  venue: string;
  weekday: number;   // 0 = Sunday
  startHour: number; // 18
  startMinute: number; // 30
  endHour: number;   // 19
  endMinute: number; // 0
};

export const heroSlides: MeetingSlide[] = [
  {
    type: "meeting",
    title: "Next Weekly Meeting (Tuesday)",
    venue: "De Oasis Hotel & Suite, Ilaro Road, Agbara Estate",
    weekday: 2,
    startHour: 18,
    startMinute: 30,
    endHour: 19,
    endMinute: 0,
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
  photo: string;
  crop?: string; 
    zoom?: number;

};

export const leaders: Leader[] = [
  { name: "Rtn. Philip Osemhanre Ebosele", role: "President", photo: "/ebosele.png", crop: "center 0%", zoom: 1 },
  { name: "Rtn. Uchenna James Okafor", role: "Vice President", photo: "/UCHENNA.png" },
  { name: "Rtn. Godwin Ogwara", role: "President Elect", photo: "/Godwin.png", crop: "center 0%", zoom: 1},
  { name: "Rtn. Odunayo Fati", role: "Immediate Past President", photo: "/odunayo.png", crop: "center 1%", zoom: 1 },
  { name: "Rtn. Mathew Edigbe PHF", role: "Secretary", photo: "/Mathew.png" },
  { name: "Rtn. Emmanuel Omokaro", role: "Treasurer", photo: "/emmanuel.png" },
  { name: "Rtn. Paul Onabanjo", role: "Service Project Chair", photo: "/Paul.png" },
  { name: "Rtn. Ademuyiwa Ashimolowo", role: "Foundation Chair", photo: "/ademuyiwa.png",crop:"center 1%", zoom:1 },
  { name: "Rtn. Lucky Akpos Arhere", role: "Membership Chair", photo: "/lucky.png" },
  { name: "Rtn. Abdur-Rahman Wahab", role: "Club Admin Chair", photo: "/wahab.png" ,crop:"center 1%", zoom:1},
  { name: "Rtn. Folashade Aina", role: "Public Image Chair", photo: "/folashade.png" },
  { name: "Rtn. Anthony Omoragbon", role: "Youth Service Chair", photo: "/anthony.png", crop: "center 30%" },
  { name: "Rtn. Rita Eze", role: "We Care Chair", photo: "/rita.png" },
  { name: "Rtn. Jerome Oyeniyi", role: "Rotary International / Discon Chair", photo: "/jerome.png" },
  { name: "Rtn. Frederick Egbamuno", role: "Club Learning Facilitator", photo: "/frederick.png", crop: "center 25%" },
  { name: "Rtn. Victor Itoya", role: "Sergent at Arms", photo: "/victor.png", crop:"center 1%", zoom:1 },
  { name: "Rtn. Pascal Ikenna Orisakwe", role: "Board Adviser 1", photo: "/pascal.png" },
  { name: "Rtn. Ajo Abidemi", role: "Board Adviser 2", photo: "/abiola.png" },
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
  {
    year: "1985",
    title: "Club Chartered",
    desc: "Chartered on April 2, 1985 by sponsor club Rotary Club of Badagry, with founding Charter President Rtn. Joe Olabode, as a member of Rotary International District 911.",
  },
  {
    year: "1987",
    title: "Weathering a Financial Crisis",
    desc: "Past President Rtn. Francis Adeoshun personally settled the club's outstanding dues, saving its Rotary International membership from delisting.",
  },
  {
    year: "2003",
    title: "A New Generation of Members",
    desc: "President Dr. Pascal Ogbolu recruited a wave of young professionals from Nestlé Nigeria, reshaping the club's energy and future leadership.",
  },
  {
    year: "2020",
    title: "Membership Surge",
    desc: "Under President Rtn. Lucky A. Arhere's 'Open Opportunities' year, intensive recruitment drove the club's membership to new highs.",
  },
  {
    year: "2024",
    title: "Joining District 9111",
    desc: "Following the split of District 9110, Rotary Club of Agbara became a member of the newly created District 9111 on July 1, 2024.",
  },
  {
    year: "2026",
    title: "Satellite Club Launched",
    desc: "Under President Rtn. Odunayo Fati, the club chartered the Rotary Satellite Club of Agbara OPIC Estate, admitted to Rotary on June 23, 2026.",
  },
];



export function getNextMeetingDate(slide: MeetingSlide): Date {
  const now = new Date();
  const next = new Date(now);
  next.setHours(slide.startHour, slide.startMinute, 0, 0);

  const daysUntil = (slide.weekday - now.getDay() + 7) % 7;
  next.setDate(now.getDate() + daysUntil);

  // if today is the meeting day but the meeting already started/ended, jump to next week
  if (daysUntil === 0 && next.getTime() <= now.getTime()) {
    next.setDate(next.getDate() + 7);
  }

  return next;
}

export function formatMeetingDisplay(slide: MeetingSlide, date: Date): string {
  const dateStr = date.toLocaleDateString("en-US", { month: "long", day: "numeric" });
  const fmt = (h: number, m: number) => {
    const period = h >= 12 ? "pm" : "am";
    const hour12 = h % 12 === 0 ? 12 : h % 12;
    return m === 0 ? `${hour12}:00 ${period}` : `${hour12}:${m.toString().padStart(2, "0")} ${period}`;
  };
  return `${dateStr} @ ${fmt(slide.startHour, slide.startMinute)} - ${fmt(slide.endHour, slide.endMinute)}`;
}