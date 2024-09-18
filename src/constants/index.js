import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  // benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  tensorflow,
  plusSquare,
  react,
  dart,
  nodejs,
  ai,
  python,
  aws,
  js,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  flutter,
  sliders04,
  youtube,
  linkedin,
  whatsapp,
  yourlogo,
  oppologo,
  aologo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Workshops",
    url: "#workshops",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#benefits",
  },
  {
    id: "2",
    title: "Insights",
    url: "#insights",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "About TEAM",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Register Now",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [oppologo, aologo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Hareesh Kumar - Founder/Director at `EDTROVE EduTech`",
    text: "ReactX",
    designation: "",
    role: "Trainer",
    date: "JUNE 2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  // {
  //   id: "1",
  //   title: "Rahul Kumar - Ex Microsoft SDE",
  //   text: "Cloud Computing using Azure",
  //   designation: "",
  //   role:"Trainer",
  //   date: "JUNE 2024",
  //   status: "progress",
  //   imageUrl: roadmap2,
  // },
  {
    id: "1",
    title: "Pathik Ghugare - ML Engineer at `Pibit.ai`",
    text: "Hands-on PyAI",
    designation: "",
    role: "Trainer",
    date: "JUNE 2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "2",
    title: "Summit",
    text: "",
    role: "Speaker",
    date: "JUNE 2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Unlock the secrets to Hackathon Mastery",
    // text: collabText,
  },
  {
    id: "1",
    title: "Front-End Web Development",
  },
  {
    id: "2",
    title: "Unleashing the Power and Limitless Potential of AI",
  },
  {
    id: "3",
    title: "Valuable Certificate Achievement",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "js",
    icon: js,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "tensorflow",
    icon: tensorflow,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "nodejs",
    icon: nodejs,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "aws",
    icon: aws,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "ai",
    icon: ai,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "react",
    icon: react,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "python",
    icon: python,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Day 1",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Grand inauguration of Ingenium",
      "commencement of various workshops",
      "Networking with the trainers",
    ],
  },
  {
    id: "1",
    title: "Day 2",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Pursuing Advanced Concepts through Workshop Sessions",
      "Analytical Insights into Student Performance during Workshop Sessions",
      "Hands on activity with real world examples",
    ],
  },
  {
    id: "2",
    title: "Day 3",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Grand Finale: Hackathon Day",
      "Career guidance Seminar",
      // "Ending ceremony of Ingenium",
    ],
  },
  {
    id: "3",
    title: "Day 4",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Speaker Summit",
      "Prize Presentation Ceremony",
      "Ending ceremony of Ingenium",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Vishesh 2K24",
    text: "Join VISHESH, the annual tech expo! Showcase your innovative ideas and win cash prizes across all departments! ",
    date: "DATE: 27 Sep - 28 Sep",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Coming Soon .",
    text: "Stay tuned for more exciting details! Coming soon—don't miss out on the updates!",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Coming Soon...",
    text: "Stay tuned for more exciting details! Coming soon—don't miss out on the updates! ",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials = [
  {
    id: "0",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/team.mrec/",
  },
  {
    id: "1",
    title: "linkedin",
    iconUrl: linkedin,
    url: "https://in.linkedin.com/company/teammrec",
  },
  {
    id: "2",
    title: "whatsapp",
    iconUrl: whatsapp,
    url: "https://chat.whatsapp.com/CG0bFlA7H8yIniZKgLtrHt",
  },
  {
    id: "3",
    title: "youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/@Team-aiml/featured",
  },
];
