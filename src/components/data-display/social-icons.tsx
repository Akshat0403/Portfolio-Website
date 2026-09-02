'use client';

import { SOCIAL_LINKS } from '@/lib/data';

const SocialIcons = () => {
  return (
    <div className="flex gap-3">
      {SOCIAL_LINKS.map((socialLink, index) => (
        <button
          key={index}
          onClick={() => window.open(socialLink.url, '_blank')}
          className="group flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-500 dark:text-gray-400 transition-all duration-300 hover:border-accent-400 dark:hover:border-accent-600 hover:bg-accent-50 dark:hover:bg-accent-900/30 hover:text-accent-600 dark:hover:text-accent-400 hover:shadow-md hover:shadow-accent-500/20 hover:-translate-y-0.5 active:scale-95"
          aria-label="Social link"
        >
          <socialLink.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
        </button>
      ))}
    </div>
  );
};

export default SocialIcons;
