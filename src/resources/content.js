import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Faudhia",
  lastName: "Makosa",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "UI/UX and Graphic Designer",
  avatar: "/Faudhia.jpeg",
  email: "faudhia@example.com",
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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
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
      {
        name: "Coursera",
        description: <>Google UX Design Professional Certificate</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "UI/UX Design",
        description: <>Figma, Adobe XD, Wireframing, Prototyping</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Graphic Design",
        description: <>Adobe Illustrator, Photoshop</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Motion & Multimedia",
        description: <>After Effects, Premiere Pro</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
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
      {
        name: "Coursera",
        description: <>Google UX Design Professional Certificate</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "UI/UX Design",
        description: <>Figma, Adobe XD, Wireframing, Prototyping</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Graphic Design",
        description: <>Adobe Illustrator, Photoshop</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Motion & Multimedia",
        description: <>After Effects, Premiere Pro</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
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
