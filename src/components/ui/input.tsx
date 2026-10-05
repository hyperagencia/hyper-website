import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export const inputBaseClasses =
  'w-full rounded-lg bg-black/[0.04] px-4 py-3 text-sm text-black placeholder:text-black/40 outline-none transition-colors duration-150 focus:bg-black/[0.06] focus:ring-2 focus:ring-black/15 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-red-400';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => {
  return (
    <input
      ref={ref}
      aria-invalid={error || undefined}
      className={cn(inputBaseClasses, className)}
      {...props}
    />
  );
});

Input.displayName = 'Input';
