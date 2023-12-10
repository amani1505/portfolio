const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Software Developer",
        degree: "Bachelor Degree In Information Technology",
        detail:
          "Bachelor's Degree in Information Technology from National Institute of Transport",
        year: "2020-2023",
      },
      {
        id: 1,
        title: "Student",
        degree: "Advance Level Certificate",
        detail:
          "Completed Advance Level Certificate from Ihungo Boys High School",
        year: "2018-2020",
      },
      {
        id: 2,
        title: "Student",
        degree: "Ordinary Level Certificate",
        detail:
          "Completed Ordinary level Certificate from Azania Boys High School",
        year: "2014-2017",
      },
      {
        id: 3,
        title: "Student",
        degree: "Primary Education",
        detail:
          "Completed Primary Certificate from Hope And Joy Primary School",
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
        url: "www.eastendsolution.co.tz",
        desc: "As an IT & Graphic Designer, I developer Websites and design.",
        year: "11/2023 - Present",
        location: "Dar es Salaam, Tanzania",
      },
      {
        id: 1,
        title: "Realtech",
        role: "Frontend Developer",
        url: "www.realtech.co.tz",
        desc: "As a frontend developer, I use Angular & Typescript to build user interfaces for web applications.",
        year: "7/2023 - 10/2023 ",
        location: "Chukwan, Zanzibar",
      },
      {
        id: 2,
        title: "eGa",
        role: "Field Student",
        url: "www.ega.go.tz",
        desc: "As a field student, I learned how to use GraphQL, Django & Angular to build interactive Web base System.",
        year: "07/2022 - 10/2022",
        location: "Dodoma, Tanzania",
      },
      {
        id: 3,
        title: "ATCL",
        role: "Field Student",
        url: "www.airtanzania.co.tz",
        desc: "As a field student, I learned how to do different computer maintanace and network troubleshoot",
        year: "07/2021 - 09/2021",
        location: "Dar es Salaam, Tanzania",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
