'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { mergeClasses } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, variant = 'primary', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={mergeClasses(
          'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2 active:scale-[0.97]',
          variant === 'primary' &&
            'bg-gradient-to-r from-accent-600 via-violet-500 to-accent-400 text-white shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:shadow-xl hover:-translate-y-0.5',
          variant === 'outline' &&
            'border-2 border-accent-500 text-accent-600 dark:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-900/20',
          variant === 'ghost' &&
            'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
