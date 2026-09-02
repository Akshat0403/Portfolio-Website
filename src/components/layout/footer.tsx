import { Github, Linkedin, Mail } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS, NAV_LINKS } from '@/lib/data';

const FOOTER_SOCIAL = [
  { icon: Github, url: 'https://github.com/Akshat0403', label: 'GitHub' },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/akshat-saxena-5b769230a',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    url: 'mailto:saxena.akshat0405@gmail.com',
    label: 'Email',
  },
];

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="bg-gray-50 dark:bg-gray-900 py-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 md:px-8">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center gap-2">
            <Typography variant="h3" className="font-bold">
              <span className="text-gradient">{'<AS />'}</span>
            </Typography>
            <Typography variant="body3" className="text-gray-500 dark:text-gray-400 text-center max-w-xs">
              Building exceptional digital experiences with modern technologies.
            </Typography>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {FOOTER_SOCIAL.map(({ icon: Icon, url, label }) => (
              <Link
                key={label}
                href={url}
                noCustomization
                externalLink
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:border-accent-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-200"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-gray-400 dark:text-gray-500">
            <Typography variant="body3" className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Akshat Saxena. Designed &amp; built with ❤️ in Jaipur, India.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
