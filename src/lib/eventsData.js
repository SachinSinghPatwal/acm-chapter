// This contains the list of events both:
// 1. upcoming events
// 2. previous events


const events = [
  {
    id: "events1",
    title: "CodeSprint 5.0",
    posterImg: "/assets/events/codesprint/poster.png",
    backgroundImg: "/assets/events/codesprint/bg.jpg",
    venue: "Auditorium, Block A",
    time: "July 5, 2025 | 10:00 AM – 5:00 PM",
    description: `
      CodeSprint 5.0 is ACM's annual coding marathon designed to push your problem-solving limits. 
      Participate in multiple rounds of competitive programming challenges — solo or in a team of 2.
    `,
    rulesAndRegulation: [
      "Solo or 2-member teams allowed.",
      "Use of ChatGPT, Copilot, and similar tools is strictly prohibited.",
      "Plagiarism will result in disqualification.",
      "Top 10 scorers move to the final rapid-fire coding round."
    ],
    leaderboard: [
      { name: "Rahul Mehta", score: 430 },
      { name: "Team ByteForce", score: 420 },
      { name: "Ananya Roy", score: 410 }
    ],
    gallery: [
      "/assets/events/codesprint/gallery1.jpg",
      "/assets/events/codesprint/gallery2.jpg",
      "/assets/events/codesprint/gallery3.jpg"
    ]
  },
  {
    id: "events2",
    title: "TechTalk: GenAI & the Future",
    posterImg: "/assets/events/genai/poster.png",
    backgroundImg: "/assets/events/genai/bg.jpg",
    venue: "Seminar Hall 2, Main Building",
    time: "August 12, 2025 | 2:00 PM – 4:30 PM",
    description: `
      A thought-provoking session on Generative AI, LLMs, and ethical implications hosted by industry experts.
      Join us for demos, live Q&A, and networking.
    `,
    rulesAndRegulation: [
      "Open to all students.",
      "Pre-registration mandatory due to limited seating.",
      "Maintain decorum during the session."
    ],
    leaderboard: [], // Not applicable
    gallery: [
      "/assets/events/genai/gallery1.jpg",
      "/assets/events/genai/gallery2.jpg"
    ]
  },
  {
    id: "events3",
    title: "UI/UX Designathon",
    posterImg: "/assets/events/designathon/poster.png",
    backgroundImg: "/assets/events/designathon/bg.jpg",
    venue: "Design Lab, Block C",
    time: "September 1, 2025 | 9:00 AM – 6:00 PM",
    description: `
      A 1-day sprint where design meets innovation. Teams of 2–3 members create interactive UI/UX mockups for real-world challenges.
      Tools like Figma and Adobe XD are encouraged.
    `,
    rulesAndRegulation: [
      "3 members max per team.",
      "Submission must include prototype + explanation.",
      "No pre-made templates allowed.",
      "Judging based on creativity, usability, and problem-solving."
    ],
    leaderboard: [
      { name: "Team PixelPioneers", score: 92 },
      { name: "NeonDesigners", score: 89 },
      { name: "The Interface Club", score: 87 }
    ],
    gallery: [
      "/assets/events/designathon/gallery1.jpg",
      "/assets/events/designathon/gallery2.jpg",
      "/assets/events/designathon/gallery3.jpg"
    ]
  },
  {
    id: "events4",
    title: "Hack the Night 2025",
    posterImg: "/assets/events/hackthenight/poster.png",
    backgroundImg: "/assets/events/hackthenight/bg.jpg",
    venue: "Innovation Hub, Block D",
    time: "October 10–11, 2025 | 8:00 PM – 8:00 AM",
    description: `
      An overnight hackathon where teams build solutions to real-world problems. Present your project to a panel of judges and win exciting prizes.
    `,
    rulesAndRegulation: [
      "Teams of 3–5 members.",
      "All code must be written during the event.",
      "At least one member must be present for the final demo.",
      "Respect the workspace and fellow participants."
    ],
    leaderboard: [
      { name: "Team NightOwls", score: 98 },
      { name: "Code Crusaders", score: 95 },
      { name: "Bug Busters", score: 93 }
    ],
    gallery: [
      "/assets/events/hackthenight/gallery1.jpg",
      "/assets/events/hackthenight/gallery2.jpg"
    ]
  },
  {
    id: "events5",
    title: "Women in Tech Panel",
    posterImg: "/assets/events/womenintech/poster.png",
    backgroundImg: "/assets/events/womenintech/bg.jpg",
    venue: "Conference Room 1, Block B",
    time: "November 15, 2025 | 3:00 PM – 5:00 PM",
    description: `
      A panel discussion featuring accomplished women in technology. Hear their stories, challenges, and advice for aspiring technologists.
    `,
    rulesAndRegulation: [
      "Open to all.",
      "Questions for the panel must be submitted in advance.",
      "Maintain respectful conduct throughout the event."
    ],
    leaderboard: [],
    gallery: [
      "/assets/events/womenintech/gallery1.jpg",
      "/assets/events/womenintech/gallery2.jpg"
    ]
  },
  {
    id: "events6",
    title: "Algorithm Visualization Workshop",
    posterImg: "/assets/events/algovis/poster.png",
    backgroundImg: "/assets/events/algovis/bg.jpg",
    venue: "Lab 204, Block E",
    time: "December 2, 2025 | 11:00 AM – 2:00 PM",
    description: `
      Learn how to visualize algorithms using JavaScript and D3.js. Hands-on session with live coding and interactive demos.
    `,
    rulesAndRegulation: [
      "Bring your own laptop.",
      "Basic knowledge of JavaScript recommended.",
      "Workshop is limited to 30 participants."
    ],
    leaderboard: [],
    gallery: [
      "/assets/events/algovis/gallery1.jpg"
    ]
  }
];

export default events;
