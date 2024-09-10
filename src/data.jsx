import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/p-1.jpeg';
import Work2 from './assets/p-2.jpeg';
import Work3 from './assets/p-3.jpeg';
import Work4 from './assets/p-4.png';
import Work5 from './assets/p-5.png';
import Work6 from './assets/p-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Karthik Kumar',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'A R',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 6379679***',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'karthikkumar1552005@gmail.com',
  },

  {
    id: 9,
    title: 'GitHub : ',
    description: 'Karthik-Kumar-AR',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'English ,Tamil',
  },
];

export const stats = [
  {
    id: 1,
    no: '6+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '4',
    title: 'Known <br /> Languages',
  },

  {
    id: 4,
    no: '5+',
    title: ' Hackathons <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - PRESENT',
    title: 'Student <span> SEC </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - 2023',
    title: 'MERN stack Intern <span> Vulture Lines Solutions </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  },

  {
    id: 3,
    category: 'education',
    icon: <FaBriefcase />,
    year: '2020 - 2022',
    title: 'Higher Secondary School <span> Vidya Peetam sr.sec school </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2008 - 2020',
    title: 'Primary & Secondary education <span> Vidya Peetam sr.sec school </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore',
  },

  // {
  //   id: 5,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2012',
  //   title: 'Master Degree <span> KIEV University </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 6,
  //   category: 'education',
  //   icon: <FaGraduationCap />,
  //   year: '2009',
  //   title: 'Bachelor Degree <span> Tunis High School </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore',
  // },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '50',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '15',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '40',
  },

  {
    id: 4,
    title: 'React',
    percentage: '15',
  },

  {
    id: 5,
    title: 'Flutterflow',
    percentage: '75',
  },

  {
    id: 6,
    title: 'MySQL',
    percentage: '50',
  },

  {
    id: 7,
    title: 'C++',
    percentage: '45',
  },

  {
    id: 8,
    title: 'Python',
    percentage: '70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Go-Green',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'App',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'VS code',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Unify',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'App',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'VS Code',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Flutter',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'ThermoFix',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'Web',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'PyCharm',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'LightCode',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'Web',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'VS Code',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML,Tailwind CSS,JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Netflix Clone(UI only)',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'Web',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'VS Code',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML , CSS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Ad Alchemist',
    details: [
      {
        icon: <FiFileText />,
        title: 'Platform : ',
        desc: 'Web',
      },
      {
        icon: <FiUser />,
        title: 'Tools : ',
        desc: 'VS Code',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'HTML , CSS , JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Code : ',
        desc: 'GitHub',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
