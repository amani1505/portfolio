const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Software Developer",
        degree: "Bachelor Degree In Information Technology",
        detail: "Bachelor's Degree in Information Technology from NIT Mabibo",
        year: "2020-2023",
      },
      {
        id: 1,
        title: "Student",
        degree: "Advance Level Certificate",
        detail:
          "Completed Advance Level Certificate from Ihungo Boys High School Located at Bukoba, Kagera",
        year: "2018-2020",
      },
      {
        id: 2,
        title: "Student",
        degree: "Ordinary Level Certificate",
        detail:
          "Completed Ordinary level Certificate from Azania Boys High School Located at Fire, Dar es Salaam",
        year: "2014-2017",
      },
      {
        id: 3,
        title: "Student",
        degree: "Primary Education",
        detail:
          "Completed Primary Certificate from Hope And Joy Primary School Located at Mbweni, Dar es Salaam",
        year: "2007-2013",
      },
    ],
  },
  {
    expCards: [
      {
        id: 0,
        title: "East End Solution",
        role: "IT & Graphic Designer",
        url: "https://eastendsolution.co.tz/",
        desc: "As an IT & Graphic Designer, I develope Websites and design.",
        year: "11/2023 - Present",
        location: "Peshawar, Pakistan",
      },
      {
        id: 1,
        title: "Realtech",
        role: "Frontend Developer",
        url: "https://realtech.co.tz",
        desc: "As a frontend developer, I use Angular & Typescript to build user interfaces for web applications.",
        year: "7/2023 - 10/2023 ",
        location: "Chukwan, Zanzibar",
      },
    //   {
    //     id: 2,
    //     title: "HauzaTech",
    //     role: "Internee",
    //     url: "no website",
    //     desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
    //     year: "02/2023 - Present",
    //     location: "Peshawar, Pakistan",
    //   },
    //   {
    //     id: 3,
    //     title: "Encoder Bytes",
    //     role: "PHP Developer",
    //     url: "https://www.encoderbytes.com/",
    //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
    //     year: "09/2020 - 02/2021",
    //     location: "Peshawar, Pakistan",
    //   },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
