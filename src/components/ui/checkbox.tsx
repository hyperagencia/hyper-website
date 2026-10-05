import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: React.ReactNode;
  error?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <label htmlFor={id} className={cn('flex cursor-pointer items-start gap-3', className)}>
        <input
          ref={ref}
          id={id}
          type="checkbox"
          aria-invalid={error || undefined}
          className={cn(
            'mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-black/20 text-black accent-black',
            error && 'outline outline-2 outline-red-400'
          )}
          {...props}
        />
        <span className="text-sm text-black/70 leading-relaxed">{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
