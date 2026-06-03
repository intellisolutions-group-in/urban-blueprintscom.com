export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Transportation Engineering', href: '/services/transportation-engineering' },
      { name: 'Water Resources Engineering', href: '/services/water-resources-engineering' },
      { name: 'Environmental Engineering', href: '/services/environmental-engineering' },
      { name: 'Structural Engineering', href: '/services/structural-engineering' },
      { name: 'Geotechnical Engineering', href: '/services/geotechnical-engineering' },
    ],
  },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact us', href: '/contact' },
];
