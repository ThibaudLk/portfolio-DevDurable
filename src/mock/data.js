import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'DevDurable', // e.g: 'Name | Developer'
  lang: 'fr', // e.g: en, es, fr, jp
  description: 'Bienvenue sur mon site', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Bonjour, ici',
  name: 'DevDurable',
  subtitle: 'Bienvenue sur mon portfolio',
  cta: 'En savoir plus',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Bonjour, je me présente : Thibaud Larrière, 24 ans. Développeur de formation. Autodidacte de nature, j\'aime apprendre, tester, rater, rééssayer.',
  paragraphTwo: 'Amoureux du voyage, j\'ai passé deux ans à voyager et à découvrir le monde. Des expériences inoubliables de rencontres et de partage.',
  paragraphThree: '... l\'Agilité, le Code de qualité, les Bonnes pratiques, le Paratage, le Rire, la Créativité ... \n Tels sont mes maîtres mots',
  resume: 'cv-thibaud-2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'site-nomicreations.png',
    title: 'NoMi Créations',
    info: 'Site vitrine d\'une Artiste Plasticienne.',
    info2: 'Réalisé avec Gatsby, React, AntDesign et Netlify CMS lui permettant une autonomie sur la gestion de son contenu !',
    url: 'https://nomi-creations.fr/',
    repo: 'https://github.com/ThibaudLk/NoMiProject', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'site-devdurable.png',
    title: 'Développeur Durable',
    info: 'Un site web personnel que j\'ai créé afin de raconter mes voyages.',
    info2: 'Réalisé avec Meteor, MongoDB et Blaze. Il comprend un article builder 100% fait main.',
    url: 'http://developpeur-durable.fr/',
    repo: 'https://github.com/ThibaudLk/testNodeJs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'site-theatrepetitpierre.png',
    title: 'Théâtre du Petit-Pierre',
    info: 'Le site d\'une compagnie de Théâtre.',
    info2: 'Réalisé en pur HTML/CSS, avec un chouilla de PHP pour structurer le site !',
    url: 'http://www.theatredupetitpierre.fr/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'N\'hésitez pas à m\'écrire un petit mot !',
  btn: 'M\'écrire',
  email: 'thibaud@developpeur-durable.fr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/thibaud.larriere',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thibaud-larri%C3%A8re-747323167/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/ThibaudLk',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
