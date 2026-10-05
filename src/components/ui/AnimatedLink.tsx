'use client';

import type { ComponentProps } from 'react';
import { Link as IntlLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/**
 * Underline-reveal + arrow hover effect, adapted from Skiper UI's Link001.
 * Use for plain text hyperlinks (nav links, footer links, inline copy links) —
 * not for Button or badge/tag/chip components.
 */
const linkClasses =
  "group relative inline-flex w-fit items-center gap-1 before:pointer-events-none before:absolute before:-bottom-0.5 before:left-0 before:h-px before:w-full before:origin-right before:scale-x-0 before:bg-current before:transition-transform before:duration-300 before:ease-[cubic-bezier(0.4,0,0.2,1)] before:content-[''] hover:before:origin-left hover:before:scale-x-100";

function LinkArrow() {
  return (
    <svg
      className="size-[0.6em] translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
      fill="none"
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1.004 9.166 9.337.833m0 0v8.333m0-8.333H1.004"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface AnimatedLinkProps extends ComponentProps<typeof IntlLink> {
  showArrow?: boolean;
}

/** Internal link (locale-aware, via @/i18n/navigation). */
export function AnimatedLink({ className, children, showArrow = true, ...props }: AnimatedLinkProps) {
  return (
    <IntlLink className={cn(linkClasses, className)} {...props}>
      {children}
      {showArrow && <LinkArrow />}
    </IntlLink>
  );
}

interface AnimatedExternalLinkProps extends ComponentProps<'a'> {
  showArrow?: boolean;
}

/** External link — opens in a new tab. */
export function AnimatedExternalLink({ className, children, showArrow = true, ...props }: AnimatedExternalLinkProps) {
  return (
    <a className={cn(linkClasses, className)} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      {showArrow && <LinkArrow />}
    </a>
  );
}
