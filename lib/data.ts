export type Project = {
  slug: string;
  category: "Water" | "Education" | "Health" | "Environment" | "Youth" | "Economic Development";
  status: "active" | "complete";
  title: string;
  desc: string;
  year: number;
  image: string;
  crop?: string; 
};
export const projects: Project[] = [
  {
  slug: "salvation-army-school-reconstruction",
  category: "Education",
  status: "complete",
  title: "Reconstruction of Salvation Army Primary School, Idoye",
  desc: "Full school reconstruction carried out in collaboration with Anochemicals Industries Ltd.",
  year: 2026,
  image: "/idoyeSchool.jpeg",
},
  {
    slug: "ijanikin-borehole",
    category: "Water",
    status: "complete",
    title: "Borehole with Water Tanks, Ijanikin",
    desc: "Clean water infrastructure delivered in collaboration with Rotary Club of Oto-Ijanikin Central.",
    year: 2025,
    image: "/images/projects/ijanikin-borehole.jpg",
  },
  {
    slug: "idioke-maternity-ward-renovation",
    category: "Health",
    status: "complete",
    title: "Renovation of Maternity Ward, Idioke",
    desc: "Full renovation of the maternity ward at Idioke Health Centre.",
    year: 2025,
    image: "/images/projects/idioke-maternity-renovation.jpg",
  },
  {
    slug: "idioke-maternity-equipping",
    category: "Health",
    status: "complete",
    title: "Equipping Idioke Maternity Ward",
    desc: "Mattresses, baby cots, and diapers provided, plus direct support covering four deliveries for indigent mothers.",
    year: 2025,
    image: "/images/projects/idioke-maternity-equipping.jpg",
  },
  {
    slug: "fire-station-solar-lighting",
    category: "Environment",
    status: "complete",
    title: "Solar Lighting at Ogun State Fire Station",
    desc: "Solar lighting installation at the Fire Station along OPIC Estate.",
    year: 2026,
    image: "/images/projects/fire-station-solar.jpg",
  },
  {
    slug: "interact-club-charter",
    category: "Youth",
    status: "complete",
    title: "Interact Club Chartered at Agbara Community High School",
    desc: "A new Interact Club chartered to grow youth engagement in service and leadership.",
    year: 2025,
    image: "/images/projects/interact-club-charter.jpg",
  },
];
export type EventItem = {
  slug: string;
  day: string;
  month: string;
  title: string;
  venue: string;
  time?: string;
  image: string;
};

const MONTH_MAP: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

export function getEventDate(event: Pick<EventItem, "day" | "month">): Date | null {
  const monthIndex = MONTH_MAP[event.month];
  if (monthIndex === undefined) return null;
  const day = parseInt(event.day, 10);
  if (Number.isNaN(day)) return null;

  const now = new Date();
  return new Date(now.getFullYear(), monthIndex, day);
}



export function isEventPast(event: Pick<EventItem, "day" | "month">): boolean {
  const eventDate = getEventDate(event);
  if (!eventDate) return false;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate.getTime() < today.getTime();
}

export const upcomingEvents: EventItem[] = [
  {
    slug: "annual-charity-gala",
    day: "05",
    month: "Sep",
    title: "Fundraising and Investiture Ceremony",
    venue: "Alarco  Hotel, Opic Estate Agbara",
    image: "/alarcs.jpg",
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
  body: string[];
  date?: string;      // e.g. "September 5, 2026"
  pullQuote?: string;  // a standout line from the article
};

export const news: NewsItem[] = [
  {
    slug: "new-president-investiture-2026",
    tag: "Club News",
    title: "Rotarian Philip Ebosele Installed as 42nd President",
    desc: "The club inducted seven new members and unveiled its 'Create Lasting Impact' agenda at the investiture on September 5, 2026.",
    image: "/RotaryAgbaraInductee.jpg",
    body: [
      "Rotary Club of Agbara marked a new chapter of leadership on Saturday, September 5, 2026, with the investiture of Rotarian Philip Osemhanre Ebosele as the club's 42nd President. The ceremony, held at Alarco Hotels and Suites in Agbara, Ogun State, drew Rotarians, district leaders, partners and well-wishers to celebrate the handover.",
      "President-Elect Rotarian Godwin Ogwara, who chaired the Investiture Planning Committee, framed the occasion as a marker of continuity, noting that the annual transfer of leadership reflects Rotary's living tradition of Service Above Self.",
      "Taking up the mantle, President Ebosele, known within the club as the 'Impact President,' anchored his administration on the theme 'Create Lasting Impact.' He outlined three pillars guiding his tenure: Impact through Service, Impact through Growth, and Impact through Sustainability, with priorities spanning health, environmental sustainability, education and economic empowerment.",
      "Ebosele also emphasised stronger collaboration with the club's Rotaract and Interact groups, describing investment in young people as an investment in the club's future, and called on members to contribute their ideas, time and effort to the year ahead.",
      "The event also saw the induction of seven new members, adding to Rotary Club of Agbara's ongoing membership growth within District 9111. Chairman of the occasion Mr. Macauley Coker-Asin commended the club's track record of health outreaches, school projects and community development, while urging deeper collaboration between Rotary, government agencies, private organisations and civil society groups.",
    ],
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