// Social Media Links
export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/GaneshVarma1',
  LINKEDIN: 'https://www.linkedin.com/in/sriganeshshiramshetty/',
  TWITTER: 'https://twitter.com/ganeshvarma1',
} as const;

// Navigation Links
export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#publications', label: 'Publications' },
  { href: '#contact', label: 'Contact' },
] as const;

// Animation Constants
export const ANIMATION = {
  DURATION: 0.5,
  EASING: [0.4, 0, 0.2, 1],
} as const;

// Theme Constants
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
  SYSTEM: 'system',
} as const;

// Image Domains
export const IMAGE_DOMAINS = ['i.ibb.co'] as const;

// Contact Form
export const CONTACT_FORM = {
  SUBJECT: 'Portfolio Contact Form',
  SUCCESS_MESSAGE: 'Thank you for your message! I will get back to you soon.',
  ERROR_MESSAGE: 'Something went wrong. Please try again later.',
} as const; 