import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    gard,
    tesla,
    cbites,
    gardWeb,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Lifelong Student",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "GARD",
      icon: gard,
      iconBg: "#383E56",
      date: "May 2022 - August 2022",
      points: [
        "Designed and developed intuitive user interfaces, optimizing the usability of the web application and enhancing overall user experience.",
        "Implemented a robust database system using Firebase, enabling seamless recording of user history and actions for improved data management.",
        "Translated Figma designs into clean, high-quality code, resulting in the successful implementation of several web application pages.",
        "Successfully launched an emailing marketing campaign leveraging Mailgun, driving an unprecedented increase of over +1000% in conversions and total value locked (TVL).",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "GARD",
      icon: gard,
      iconBg: "#E6DEDD",
      date: "September 2022 - Present",
      points: [
        "Refined and refactored critical components within the company’s web application, enhancing performance and scalability for a seamless user experience.",
        "Collaborated closely with a cross-functional team of developers and designers to implement highly-demanded features and functionalities, effectively addressing market needs and user feedback.",
        "Leveraged Python and smart contracts to successfully distribute blockchain protocol rewards to users, ensuring secure transactions.",
        "Leveraged Python and Mailgun to efficiently manage a mailing list of over 160,000 recipients, delivering regular emails with the latest news and updates about the company's services and web application.",
      ],
    },
    {
      title: "Co-Founder & Frontend Development Lead	",
      company_name: "Crypto Bites",
      icon: cbites,
      iconBg: "#383E56",
      date: "Jan. 2023 - Present",
      points: [
        "As Co-Founder & Frontend Development Lead, I play a pivotal role in driving our mobile application development, leading the design team, and nurturing our mailing list.",
        "Spearheaded the design and implementation of an innovative iOS mobile application using React-Native and Node.js, to deliver seamless user experience robust functionality.",
        "Successfully built a captivating landing page for our company, optimizing user engagement and conversion rates (cbites.co).",
        "Cbites revolutionizes the intersection of Defi and traditional finance by providing a platform where users can conveniently spend their hard earned crypto on their favorite restaurants directly from their crypto wallet.",
        
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "GARD Web App",
      description:
        "Web-based platform that allows Algorand DeFi participants to earn sustainable yields, leverage ALGOs/ALGO derivatives, and participate in Algorand Governance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: gardWeb,
      source_code_link: "https://github.com/",
    },
    {
      name: "Cbites Landing Page",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };