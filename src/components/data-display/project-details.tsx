import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

import { ProjectDetails as ProjectDetailsType } from '@/lib/types';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import Tag from '@/components/data-display/tag';

type ProjectDetailsProps = ProjectDetailsType & {
  layoutType: 'default' | 'reverse';
};

const ProjectDetails = ({
  name,
  description,
  technologies,
  url,
  previewImage,
  layoutType = 'default',
}: ProjectDetailsProps) => {
  return (
    <div className="mx-auto w-full max-w-6xl group">
      <div
        className={mergeClasses(
          'relative flex w-full flex-col md:flex-row rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray dark:bg-gray overflow-hidden shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-accent-500/10 hover:-translate-y-1',
          'gradient-border'
        )}
      >
        {/* Image */}
        <div
          className={mergeClasses(
            'flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 max-md:rounded-t-2xl md:w-1/2 lg:p-12',
            layoutType === 'default'
              ? 'md:rounded-l-2xl'
              : 'md:order-last md:rounded-r-2xl'
          )}
        >
          <Link noCustomization href={url} externalLink>
            <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
              <Image
                src={previewImage}
                alt={`${name} preview`}
                className="rounded-xl transition-transform duration-700 group-hover:scale-105"
                style={{ objectFit: 'cover' }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-accent-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl flex items-end justify-center p-4">
                <span className="text-white text-sm font-medium flex items-center gap-1.5">
                  <ExternalLink className="h-4 w-4" /> View Project
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Content */}
        <div
          className={mergeClasses(
            'flex flex-col gap-5 p-8 md:w-1/2 lg:p-12',
            layoutType === 'default' ? '' : 'md:order-first'
          )}
        >
          {/* Accent line */}
          <div className="h-1 w-12 rounded-full bg-gradient-to-r from-accent-500 to-violet-500" />

          <Typography variant="subtitle" className="font-bold text-gray-900 dark:text-gray-100">
            {name}
          </Typography>
          <Typography className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {description}
          </Typography>
          <div className="flex flex-wrap gap-2">
            {technologies?.map((technology, index) => (
              <Tag key={index} label={technology} variant="tech" />
            ))}
          </div>
          <Link
            href={url}
            noCustomization
            className="self-start flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-accent-600 dark:text-accent-400 border border-accent-200 dark:border-accent-800 hover:bg-accent-50 dark:hover:bg-accent-900/30 hover:border-accent-400 transition-all duration-200 group/link"
            externalLink
          >
            <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
