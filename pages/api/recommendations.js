// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: "Beneth Mshumbusi",
    image: "images/beneth.jpeg",
    designation:
      "Laravel | Django | SEO Expert | SEO Specialist | Graphics designer",
    view: "Hey everyone! I wanted to take a moment to recommend Robinson for any Frontend development  opportunities. I had the pleasure of working with him on multiple projects where he showcased a strong understanding of Frontend development  concepts and delivered high-quality code. He consistently demonstrated a willingness to learn and grow, and his enthusiasm for tackling new challenges was contagious. Osama is a reliable and dedicated team member who would be a great asset to any Frontend developers team. Highly recommended! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/beneth-emmanuel-54a05b217",
  },
  {
    id: 1,
    name: "Justin Msengi",
    image: "images/justin.jpg",
    designation: "Laravel | Django | Python Developer | IT Consultation",
    view: "I had the privilege of working alongside Robinson on multiple university projects, and I must say, his talent and work ethic truly stood out.  I wholeheartedly endorse Robinson for any opportunity that calls for a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/justin-msengi",
  },
  {
    id: 2,
    name: "Davies Marenge",
    image: "images/davies.JPG",
    designation: " IT Expert | Story writer | Poet | Content creator",
    view: "I wholeheartedly recommend Robin as a talented Angular frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Robin's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
    linkednURL: "https://www.linkedin.com/in/davies-amedeus-9892a9192",
  },
  // {
  //   id: 3,
  //   name: "Miriam Kibalabala",
  //   image: "images/muhammad.jpeg",
  //   designation: "MERN Stack Developer at Productbox",
  //   view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  //   linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/",
  // },
];
export default function handler(req, res) {
  res.status(200).json(recommendationCard);
}
