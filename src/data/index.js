import img1 from '../images/product-chain-1.png'
import img2 from '../images/tag-1.png'
import img3 from '../images/feather-pen-2.png'
import img4 from '../images/feather-pen-1.png'
import img5 from '../images/MoviesInfoWebApp.png'
import img6 from '../images/BlogWebApp.png'
import img7 from '../images/Ecommerce.png'
import img8 from '../images/avatar-image.png'
import img9 from '../images/user2.jpeg'
import img10 from '../images/user3.jpeg'

const data = {
  skills: [
    {
      id: "1",
      src: img1,
      title: "Front-End",
      description:
        "Frontend development: Building dynamic web interfaces with React and other tools for immersive user experiences.",
    },
    {
      id: "2",
      src: img2,
      title: "Back-End",
      description:
        "Backend development: Leveraging Firebase's robust backend functionalities to power dynamic web interfaces.",
    },
    {
      id: "3",
      src: img3,
      title: "UI & UX Design",
      description:
        "Expertly crafting intuitive interfaces and seamless user experiences utilizing Figma's design platform and innovative tools.",
    },
    {
      id: "4",
      src: img4,
      title: "Web API's",
      description:
        "Crafting robust APIs to facilitate seamless communication between web applications and services.",
    },
  ],
  portfolio: [
    {
      id: "1",
      src: img5,
      title: "Movies DB",
      description:
        "A dynamic platform offering seamless browsing, search, and discovery of movies, with user-friendly features and an engaging user interface.",
      link: "https://movie-tracker-react.vercel.app/",
    },
    {
      id: "2",
      src: img6,
      title: "Blog Web App",
      description:
        "A dynamic platform for sharing insights, stories, and ideas, designed with an intuitive interface and features to engage readers and creators alike.",
      link: "https://blogapp-react-151ea.web.app/",
    },
    {
      id: "3",
      src: img7,
      title: "Ecommerce",
      description:
        "An innovative platform offering seamless online shopping experiences, featuring intuitive navigation, and personalized recommendations.",
      link: "https://github.com/sunnyDas101",
    },
  ],
  testimonial: [
    {
      id: "1",
      count: "5",
      src: img8,
      description:
        "Impressive website revamp! Professional team, stunning results.",
      author_name: "Dianne Russel",
      author_designation: "Starbucks",
    },
    {
      id: "2",
      count: "5",
      src: img9,
      description:
        "Exceptional work! Responsive, creative, exceeded expectations.",
      author_name: "Kristin Watson",
      author_designation: "Louis Vuitton",
    },
    {
      id: "3",
      count: "5",
      src: img10,
      description:
        "Game-changer! Amazing website, drives results, unmatched service.",
      author_name: "Kathryn Murphy",
      author_designation: "McDonald's",
    },
  ],
};

export default data;
