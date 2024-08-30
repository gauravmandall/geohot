export const siteConfig = {
  name: 'Geohot',
  siteDomain: 'geohot.vercel.app',
  titleTemplate: '%s | Geohot',
  url: 'https://geohot.vercel.app',
  ogImage: '/icons/krsna.png',
  description: 'Your personal Web3 wallet',
  links: {
    twitter: 'https://twitter.com/gauravmandall',
    github: 'https://github.com/gauravmandall/geohot',
  },
  creator: {
    name: 'Gaurav Mandal',
    url: 'https://gauravmandall.vercel.app',
  },
};

export type SiteConfig = typeof siteConfig;
