const expertise = [
  {
    id: 0,
    title: "Full Stack Development",
    desc: "I am a skilled Frontend and Backend developer with extensive experience in building robust web applications using Postgres, NestJS, Angular, NextJs  and Node.js. I possess a strong understanding of server-side rendering, API integration, and database management. With my expertise, I can deliver dynamic and efficient web solutions tailored to meet the unique requirements of clients.",
  },
  {
    id: 1,
    title: "Mobile Development",
    desc: "I am a skilled Mobile  developer with extensive experience in building robust mobile applications using Fultter. I possess a strong understanding of State management, API integration. With my expertise, I can deliver dynamic and efficient application solutions tailored to meet the unique requirements of clients.",
  },

  {
    id: 3,
    title: "Github",
    desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
  },
];

export default function handler(req, res) {
  res.status(200).json(expertise);
}
