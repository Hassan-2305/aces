import type { StaticImageData } from "next/image";
import type { NavLink, Stat, ContactInfo } from "@aces/types";
import type { PillarIcon, JourneyIcon } from "@aces/ui";
import workshop from "@/assets/workshop.jpg";
import hackathon from "@/assets/hackathon.jpg";
import techTalk from "@/assets/tech-talk.jpg";
import collabProject from "@/assets/collab-project.jpg";
import eventCybersecurity from "@/assets/event-cybersecurity.jpg";
import eventDsa from "@/assets/event-dsa.jpg";
import avatarAlex from "@/assets/avatar-alex.jpg";
import avatarRoshan from "@/assets/avatar-roshan.jpg";
import avatarPriya from "@/assets/avatar-priya.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";
import avatarRichard from "@/assets/avatar-richard.jpg";
import alumniSudhanshu from "@/assets/alumni-sudhanshu.jpg";
import alumniIshika from "@/assets/alumni-ishika.jpg";
import alumniDurga from "@/assets/alumni-durga.jpg";

export const navLinks: NavLink[] = [
  { label: "ABOUT", href: "#about" },
  { label: "EVENTS", href: "#events" },
  { label: "ACHIEVEMENTS", href: "#achievements" },
  { label: "LEADERBOARD", href: "#leaderboard" },
];

export const techStacks = [
  "CLOUD",
  "AI/ML",
  "CYBERSECURITY",
  "WEBDEV",
  "OPEN SOURCE",
  "DEVOPS",
] as const;

export const stats: Stat[] = [
  {
    value: "25+",
    label: "Years",
    caption: "Fostering technical excellence and innovation on campus.",
  },
  {
    value: "400+",
    label: "aspirants",
    caption: "actively collaborating, learning, and building together.",
  },
  {
    value: "100+",
    label: "events",
    caption: "Workshops, hackathons, and tech talks conducted to date.",
  },
];

export const pillars: {
  title: string;
  body: string;
  icon: PillarIcon;
}[] = [
  {
    title: "Community",
    icon: "community",
    body: "We bring together passionate Computer Science and Engineering students to share knowledge, support peer learning, and build strong professional networks that last beyond graduation.",
  },
  {
    title: "Collaboration",
    icon: "handshake",
    body: "We create an open environment where students team up to work on real-world projects, hackathons, and open-source initiatives to solve complex technical challenges together.",
  },
  {
    title: "Innovate",
    icon: "bulb",
    body: "We encourage members to explore modern tech stacks, experiment with new ideas, and build impactful, industry-ready solutions that shape the future of technology.",
  },
];

export const excellencePillars = [
  {
    title: "Hands-on Workshops",
    image: workshop,
    imageAlt:
      "An ACES member presenting to a full lecture hall during a hands-on workshop",
    // Figma: x -58, y -18 within a 708x439 frame
    focalPoint: "50% 38%",
    body: "Dive deep into real-world tools, frameworks, and technologies through structured, hands-on learning sessions led by experienced peers and industry practitioners.",
    keyFocus:
      "Full-stack development, cloud architecture, hardware integration, UI/UX, and emerging frameworks.",
  },
  {
    title: "Hackathons & Coding Sprints",
    image: hackathon,
    imageAlt: "Students collaborating on laptops during a coding sprint",
    // Figma: x 20, y -79 within a 612x408 frame
    focalPoint: "50% 45%",
    body: "High-energy coding competitions designed to test problem-solving skills, rapid prototyping, and team execution under real-world constraints.",
    keyFocus:
      "Product development, competitive problem solving, ideation, and rapid solution prototyping.",
  },
  {
    title: "Tech Talks & Industry Sessions",
    image: techTalk,
    imageAlt: "Students seated with laptops during an industry tech talk",
    // Figma: x 0, y -106 within a 652x435 frame
    focalPoint: "50% 42%",
    body: "Interactive speaker events featuring engineering leads, researchers, and alumni who share technical expertise, industry insights, and career roadmaps.",
    keyFocus:
      "Career guidance, tech trends, architecture insights, and real-world engineering practices.",
  },
  {
    title: "Collaborative Projects",
    image: collabProject,
    imageAlt: "A team of students working together around a laptop in a lab",
    // Figma: x 20, y -58 within a 611x407 frame
    focalPoint: "50% 38%",
    body: "Open-ended team initiatives where members build, maintain, and launch open-source tools, campus solutions, and portfolio-worthy software together.",
    keyFocus:
      "Git workflows, code reviews, system design, and peer collaboration.",
  },
] as const;

export type EventStatus = "UPCOMING" | "COMPLETED";

export const events: {
  title: string;
  status: EventStatus;
  blurb: string;
  date: string;
  time: string;
  venue: string;
  image?: StaticImageData;
  imageAlt?: string;
}[] = [
  {
    title: "Intro to Linux",
    status: "UPCOMING",
    blurb:
      "Discover the basics, understand how cybersecurity impacts our digital world, and become part of a community that learns and grows together.",
    date: "27 AUG 2026",
    time: "07:00 PM",
    venue: "Online",
  },
  {
    title: "Intro to Cybersecurity",
    status: "COMPLETED",
    blurb:
      "Discover the basics, understand how cybersecurity impacts our digital world, and become part of a community that learns and grows together.",
    date: "06 AUG 2026",
    time: "04:00 PM",
    venue: "CS1, Software Block",
    image: eventCybersecurity,
    imageAlt: "Poster for the Intro to Cybersecurity session",
  },
  {
    title: "Introduction to Arrays",
    status: "COMPLETED",
    blurb:
      "ACES CUSAT is launching its DSA Series, designed to help you build a strong foundation, one concept at a time.",
    date: "22 JUL 2026",
    time: "04:00 PM - 05:00 PM",
    venue: "Software Block",
    image: eventDsa,
    imageAlt: "Poster for the Data Structures and Algorithms session",
  },
];

export const podium = [
  {
    rank: 2,
    name: "Roshan Sharma",
    batch: "CSE, S5",
    score: "1280 XP",
    avatar: avatarRoshan,
  },
  {
    rank: 1,
    name: "Alex Chen",
    batch: "CSE, S5",
    score: "1650 XP",
    avatar: avatarAlex,
  },
  {
    rank: 3,
    name: "Priya Verma",
    batch: "CSE, S3",
    score: "1150 XP",
    avatar: avatarPriya,
  },
] as const;

export const runnersUp = [
  {
    rank: 4,
    name: "Robert Issac",
    batch: "CSE, S5",
    score: "950 XP",
    avatar: avatarRobert,
  },
  {
    rank: 5,
    name: "Richard Shaw",
    batch: "CSE, S3",
    score: "923 XP",
    avatar: avatarRichard,
  },
] as const;

export const articles = [
  {
    title:
      "Building Scalable Backends: Lessons Learned from Our Campus Project",
    tag: "SYSTEM ARCHITECTURE",
    author: "Alex Chen, S5",
    published: "26 AUG 2026",
    excerpt:
      "A practical guide on optimizing PostgreSQL queries and handling high-concurrency requests during peak registration hours...",
  },
  {
    title: "Cracking the Technical Interview: A Student's Perspective",
    tag: "CAREER & INTERNSHIPS",
    author: "Priya K.S, S7",
    published: "28 JUL 2026",
    excerpt:
      "How consistent problem solving in weekly track sessions helped land a summer software engineering internship...",
  },
  {
    title: "Getting Started with Open-Source Contributions in College",
    tag: "OPEN SOURCE",
    author: "Rohith S, S5",
    published: "12 AUG 2026",
    excerpt:
      "Breaking down your first Git pull request, finding beginner-friendly issues, and collaborating with global teams...",
  },
] as const;

export const publishSteps = [
  {
    title: "Submit Your Draft",
    body: "Share your article idea or Markdown file via our draft portal.",
  },
  {
    title: "Peer Review",
    body: "Our core editorial team reviews your piece for technical accuracy and clarity.",
  },
  {
    title: "Get Featured",
    body: "Your article goes live on the ACES blog and is shared across our community channels.",
  },
] as const;

/** Portraits are placeholders — swap the three assets/alumni-*.png files. */
export const alumni = [
  {
    name: "Sudhanshu Kumar",
    role: "Software Development Engineer",
    photo: alumniSudhanshu,
    quote:
      "For most of us, the goal is to secure a good placement. However, that's not something to worry about. Focus on building your skills, stay prepared, be consistent, and trust the process. The placement season will teach you a lot. Most importantly, don't lose hope if luck is not on your side at times. Keep learning and stay confident.",
  },
  {
    name: "Ishika Ishani",
    role: "Associate Software Engineer",
    photo: alumniIshika,
    quote:
      "My journey at CUSAT has been both enriching and transformative. I am grateful to CUSAT for providing an environment that encouraged learning, growth, and career development. This achievement marks an important milestone in my professional journey, and I look forward to applying the knowledge and skills gained at CUSAT in my career.",
  },
  {
    name: "Durga Sumesh",
    role: "Software Engineer",
    photo: alumniDurga,
    quote:
      "From deep-diving into labs to collaborating on hackathons and coding challenges, the campus environment completely shaped my problem-solving mindset. Transitioning from final-year projects to landing a great placement felt incredibly smooth, and I know the core engineering fundamentals I learned here will stick with me as I start my journey.",
  },
] as const;

export const journeyPillars: {
  title: string;
  body: string;
  icon: JourneyIcon;
}[] = [
  {
    title: "Zero Barriers",
    icon: "barriers",
    body: "From beginners writing their first line of code to experienced developers.",
  },
  {
    title: "Real-World Experience",
    icon: "experience",
    body: "Work on collaborative projects, open-source repos, and live campus solutions.",
  },
  {
    title: "Vibrant Ecosystem",
    icon: "ecosystem",
    body: "Connect with like-minded peers, senior mentors, and industry alumni.",
  },
];

export const footerLinks = [
  "About",
  "Events",
  "Achievements",
  "Leaderboard",
  "Placements",
  "Study Materials",
  "Newsletter",
] as const;

export const contact: ContactInfo = {
  email: "aces@cusat.ac.in",
  address: "School of Engineering, CUSAT",
};
