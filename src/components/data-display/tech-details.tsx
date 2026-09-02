'use client';

import type { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <Link noCustomization href={url} externalLink>
      <div className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 transition-all duration-300 hover:border-accent-300 dark:hover:border-accent-700 hover:bg-accent-50 dark:hover:bg-accent-900/20 hover:shadow-lg hover:shadow-accent-500/10 hover:-translate-y-1">
        <div className="flex h-12 w-12 items-center justify-center">
          <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            className="transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <Typography
          variant="body3"
          className="font-medium text-center text-gray-600 dark:text-gray-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors duration-200"
        >
          {label}
        </Typography>
      </div>
    </Link>
  );
};

export default TechDetails;
