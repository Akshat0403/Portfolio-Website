import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  /** 'section' — large accent pill for section headings; 'tech' — small subdued chip for tech lists */
  variant?: 'section' | 'tech';
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, variant = 'section', ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200',
          variant === 'section' &&
            'bg-accent-100 dark:bg-accent-900/40 px-5 py-1.5 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-700/50',
          variant === 'tech' &&
            'bg-gray-100 dark:bg-gray-800 px-3.5 py-1 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-accent-300 dark:hover:border-accent-700 hover:bg-accent-50 dark:hover:bg-accent-900/20',
          className
        )}
        ref={ref}
        {...props}
      >
        <Typography
          variant="body3"
          className={mergeClasses(
            'font-medium',
            variant === 'section' && 'text-accent-700 dark:text-accent-300',
            variant === 'tech' && 'text-gray-700 dark:text-gray-300'
          )}
        >
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
