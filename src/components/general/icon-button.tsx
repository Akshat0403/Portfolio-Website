import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const iconButtonVariants = cva(
  'flex justify-center items-center rounded-xl p-1.5 transition-all duration-200 [&_svg]:stroke-gray-500 hover:[&_svg]:stroke-accent-600 dark:hover:[&_svg]:stroke-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20 active:scale-95',
  {
    variants: {
      size: {
        md: '[&_svg]:w-5 [&_svg]:h-5',
        lg: '[&_svg]:w-7 [&_svg]:h-7',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      asChild = false,
      showTooltip = false,
      tooltipText = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={mergeClasses(
          'relative',
          iconButtonVariants({ size }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 dark:bg-gray-100 px-2.5 py-1 text-xs font-medium text-white dark:text-gray-900 shadow-lg">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
