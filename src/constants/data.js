import images from './images'

const navLinks = [
  {
    path: '/about',
    link: 'OUR COMPANY',
  },
  {
    path: '/locations',
    link: 'LOCATIONS',
  },
  {
    path: '/contact',
    link: 'CONTACT',
  },
]

const advantages = [
  {
    image: images.illustrationPassionate,
    title: 'PASSIONATE',
    description: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
  },
  {
    image: images.illustrationResourceful,
    title: 'RESOURCEFUL',
    description: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
  },
  {
    image: images.illustrationFriendly,
    title: 'FRIENDLY',
    description: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
  },
]

const socials = [
  {
    id: 1,
    image: images.iconFacebook,
  },
  {
    id: 2,
    image: images.iconYoutube,
  },
  {
    id: 3,
    image: images.iconTwitter,
  },
  {
    id: 4,
    image: images.iconPinterest,
  },
  {
    id: 5,
    image: images.iconInstagram,
  },
]

const webDesigns = [
  {
    image: images.imageExpress,
    title: 'EXPRESS',
    text: 'A multi-carrier shipping website for ecommerce businesses',
  },
  {
    image: images.imageTransfer,
    title: 'TRANSFER',
    text: 'Site for low-cost money transfers and sending money within seconds',
  },
  {
    image: images.imagePhoton,
    title: 'PHOTON',
    text: 'A state-of-the-art music player with high-resolution audio and DSP effects',
  },
  {
    image: images.imageBuilder,
    title: 'BUILDER',
    text: 'Connects users with local contractors based on their location',
  },
  {
    image: images.imageBlogr,
    title: 'BLOGR',
    text: 'Blogr is a platform for creating an online blog or publication',
  },
  {
    image: images.imageCamp,
    title: 'CAMP',
    text: 'Get expert training in coding, data, design, and digital marketing',
  },
]

const appDesigns = [
  {
    image: images.imageAirfilter,
    title: 'AIRFILTER',
    text: 'Solving the problem of poor indoor air quality by filtering the air',
  },
  {
    image: images.imageEyecam,
    title: 'EYECAM',
    text: 'Product that lets you edit your favorite photos and videos at any time',
  },
  {
    image: images.imageFaceit,
    title: 'FACEIT',
    text: 'Get to meet your favorite internet superstar with the faceit app',
  },
  {
    image: images.imageTodo,
    title: 'TODO',
    text: 'A todo app that features cloud sync with light and dark mode',
  },
  {
    image: images.imageLoopstudios,
    title: 'LOOPSTUDIOS',
    text: 'A VR experience app made for Loopstudios',
  },
]

const graphicDesigns = [
  {
    image: images.imageChange,
    title: 'TIM BROWN',
    text: 'A book cover designed for Tim Brown’s new release, ‘Change’',
  },
  {
    image: images.imageBoxedWater,
    title: 'BOXED WATER',
    text: 'A simple packaging concept made for Boxed Water',
  },
  {
    image: images.imageScience,
    title: 'SCIENCE!',
    text: 'A poster made in collaboration with the Federal Art Project',
  },
]

const countries = [
  {
    image: images.illustrationCanada,
    title: 'CANADA',
  },
  {
    image: images.illustrationAustralia,
    title: 'AUSTRALIA',
  },
  {
    image: images.illustrationUK,
    title: 'UNITED KINGDOM',
  },
]

const locations = [
  {
    title: 'Canada',
    office: ['Designo Central Office', '3886 Wellington Street', 'Toronto, Ontario M9C 3J5'],
    contact: ['Contact', 'P : +1 253-863-8967', 'M : contact@designo.co'],
    image: [images.mapCanadaDesktop, images.mapCanadaTablet],
  },
  {
    title: 'Australia',
    office: ['Designo AU Office', '19 Balonne Street', 'New South Wales 2443'],
    contact: ['Contact', 'P : (02) 6720 9092', 'M : contact@designo.au'],
    image: [images.mapAustraliaDesktop, images.mapAustraliaTablet],
  },
  {
    title: 'United Kingdom',
    office: ['Designo UK Office', '13  Colorado Way', 'Rhyd-y-fro SA8 9GA'],
    contact: ['Contact', 'P : 078 3115 1400', 'M : contact@designo.uk'],
    image: [images.mapUKDesktop, images.mapUKTablet],
  },
]

export default { navLinks, advantages, socials, webDesigns, appDesigns, graphicDesigns, countries, locations }
