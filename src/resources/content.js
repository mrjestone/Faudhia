import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Faudhia",
  lastName: "Makosa",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI/UX and Graphic Designer",
  avatar: "/Faudhia.jpeg",
  email: "faudhiamakosa@gmail.com",
  location: "Africa/Dar_es_Salaam", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Swahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/faudhia-makosa-955b472a6/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Faudhia Makosa, a UI/UX and Graphic Designer who creates websites,
        apps, and visuals that are easy to use and visually appealing. I focus
        on making designs that help people navigate smoothly while enjoying the
        look and feel. My goal is to turn ideas into designs that work well and
        leave a positive impression.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2020 - Present",
        role: "UI/UX and Graphic Designer",
        achievements: [
          <>
            Experience in UI/UX design, website design, graphic design, and
            multimedia content creation. My work includes creating marketing
            materials, event posters, branding, interactive user interfaces, and
            various websites for both personal projects and clients.
          </>,
          <>
            Work closely with teams and clients to make sure every design meets
            user needs and follows modern design trends.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Dodoma",
        description: <>Bachelor's degree in Multimedia</>,
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    certificates: [
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Coursera",
        date: "2024",
        description: <>Comprehensive program covering user experience design principles, research methods, wireframing, prototyping, and usability testing.</>,
        image: {
          src: "/certificate/coursera-cert-1.jpg",
          alt: "Google UX Design Professional Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera EPLYPU7R88PA.pdf",
        credentialUrl: "https://coursera.org/share/3c052fb7b9b69d47cdc07fd29a6836b9",
      },
      {
        title: "User Experience Research and Design Specialization",
        issuer: "Coursera",
        date: "2024",
        description: <>Advanced specialization in UX research methodologies, user-centered design principles, and design thinking processes.</>,
        image: {
          src: "/certificate/coursera-cert-2.jpg",
          alt: "User Experience Research and Design Specialization Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera PA39REBAC6XF.pdf",
        credentialUrl: "https://coursera.org/share/f60f7d9d2808416ec87ff6dc6ad57aad",
      },
      {
        title: "Interaction Design Specialization",
        issuer: "Coursera",
        date: "2024",
        description: <>Specialized training in interaction design, interface design patterns, and creating engaging user experiences.</>,
        image: {
          src: "/certificate/coursera-cert-3.jpg",
          alt: "Interaction Design Specialization Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera Q5MAEA925HVL_2.pdf",
        credentialUrl: "https://coursera.org/share/082830274b55b1de0c16a3e729aaf76e",
      },
    ],
  },
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Faudhia Makosa, a UI/UX and Graphic Designer who creates websites,
        apps, and visuals that are easy to use and visually appealing. I focus
        on making designs that help people navigate smoothly while enjoying the
        look and feel. My goal is to turn ideas into designs that work well and
        leave a positive impression.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2020 - Present",
        role: "UI/UX and Graphic Designer",
        achievements: [
          <>
            Experience in UI/UX design, website design, graphic design, and
            multimedia content creation. My work includes creating marketing
            materials, event posters, branding, interactive user interfaces, and
            various websites for both personal projects and clients.
          </>,
          <>
            Work closely with teams and clients to make sure every design meets
            user needs and follows modern design trends.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Dodoma",
        description: <>Bachelor's degree in Multimedia</>,
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    certificates: [
      {
        title: "Google UX Design Professional Certificate",
        issuer: "Coursera",
        date: "2024",
        description: <>Comprehensive program covering user experience design principles, research methods, wireframing, prototyping, and usability testing.</>,
        image: {
          src: "/certificate/coursera-cert-1.jpg",
          alt: "Google UX Design Professional Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera EPLYPU7R88PA.pdf",
        credentialUrl: "https://coursera.org/share/3c052fb7b9b69d47cdc07fd29a6836b9",
      },
      {
        title: "User Experience Research and Design Specialization",
        issuer: "Coursera",
        date: "2024",
        description: <>Advanced specialization in UX research methodologies, user-centered design principles, and design thinking processes.</>,
        image: {
          src: "/certificate/coursera-cert-2.jpg",
          alt: "User Experience Research and Design Specialization Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera PA39REBAC6XF.pdf",
        credentialUrl: "https://coursera.org/share/f60f7d9d2808416ec87ff6dc6ad57aad",
      },
      {
        title: "Interaction Design Specialization",
        issuer: "Coursera",
        date: "2024",
        description: <>Specialized training in interaction design, interface design patterns, and creating engaging user experiences.</>,
        image: {
          src: "/certificate/coursera-cert-3.jpg",
          alt: "Interaction Design Specialization Certificate",
          width: 16,
          height: 9,
        },
        pdfUrl: "/certificate/Coursera Q5MAEA925HVL_2.pdf",
        credentialUrl: "https://coursera.org/share/082830274b55b1de0c16a3e729aaf76e",
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Your portfolio images
  images: [
    // Horizontal images
    {
      src: "/images/gallery/horizontal-1.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-5.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-6.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-7.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-8.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-9.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-10.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-11.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-12.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-13.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-14.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-15.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-16.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-17.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-18.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-19.png",
      alt: "Portfolio image",
      orientation: "horizontal",
    },
    // Vertical images
    {
      src: "/images/gallery/vertical-1.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-5.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-6.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-7.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-8.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-9.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-10.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-11.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-12.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-13.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-14.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-15.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-16.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-17.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-18.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-19.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-20.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-21.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-22.jpg",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-23.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-24.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-25.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-26.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-27.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-28.png",
      alt: "Portfolio image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
