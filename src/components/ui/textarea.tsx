import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { inputBaseClasses } from './input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, error, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      aria-invalid={error || undefined}
      className={cn(inputBaseClasses, 'resize-none', className)}
      rows={5}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';
