import type { ReactElement, SVGProps } from 'react';

export type IconName =
  | 'github'
  | 'linkedin'
  | 'x'
  | 'artstation'
  | 'email'
  | 'arrow-right'
  | 'arrow-down'
  | 'play'
  | 'image'
  | 'film'
  | 'close'
  | 'chevron-left'
  | 'chevron-right'
  | 'sparkle';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const PATHS: Record<IconName, ReactElement> = {
  github: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.71.5.09.68-.22.68-.5v-1.74c-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.55-1.13-4.55-5.04 0-1.11.39-2.02 1.03-2.74-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04A9.4 9.4 0 0 1 12 7.07c.85 0 1.71.12 2.51.34 1.91-1.31 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.74 0 3.92-2.34 4.78-4.57 5.03.36.32.68.94.68 1.9v2.81c0 .28.18.6.69.5C19.13 20.58 22 16.74 22 12.23 22 6.58 17.52 2 12 2Z"
    />
  ),
  linkedin: (
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V9.83H5.67v8.51h2.67ZM7 8.66a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.68v-4.66c0-2.5-1.34-3.66-3.12-3.66-1.45 0-2.1.8-2.46 1.36V9.83h-2.67c.04.76 0 8.51 0 8.51h2.67v-4.75c0-.24.02-.48.09-.65.18-.48.62-.97 1.34-.97.95 0 1.33.72 1.33 1.78v4.59h2.82Z" />
  ),
  x: (
    <path d="M17.53 3H20.5l-6.49 7.41L21.75 21h-5.99l-4.69-6.13L5.66 21H2.69l6.94-7.93L2.5 3h6.14l4.24 5.6L17.53 3Zm-1.05 16.2h1.65L7.62 4.7H5.85l10.63 14.5Z" />
  ),
  artstation: (
    <path d="M3 17.83 4.85 21h13.06c.94 0 1.7-.46 2.15-1.18L21 18.06H3v-.23ZM21.6 16.4 14.69 4.39c-.34-.59-.96-.99-1.69-.99H9.93l9.83 17h.95a1.94 1.94 0 0 0 1.93-1.93c0-.4-.13-.78-.34-1.07h.01l-.7-1Zm-9.59-2.04L7.79 7.05l-4.22 7.31h8.44Z" />
  ),
  email: (
    <>
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'arrow-right': (
    <path d="M5 12h13m0 0-5-5m5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'arrow-down': (
    <path d="M12 5v14m0 0-5-5m5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  play: (
    <path d="M8 5.5v13a.5.5 0 0 0 .77.42l10-6.5a.5.5 0 0 0 0-.84l-10-6.5A.5.5 0 0 0 8 5.5Z" />
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="9" cy="10" r="1.6" fill="currentColor" />
      <path d="m4 18 5-5 4 4 3-3 4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  film: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9h18M3 15h18M8 4v16M16 4v16" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  close: (
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  ),
  'chevron-left': (
    <path d="m14 6-6 6 6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  'chevron-right': (
    <path d="m10 6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
  sparkle: (
    <path d="M12 3l1.7 4.5L18 9.2l-4.3 1.7L12 15l-1.7-4.1L6 9.2l4.3-1.7L12 3Zm6 9 .9 2.4 2.4.9-2.4.9-.9 2.4-.9-2.4-2.4-.9 2.4-.9.9-2.4Z" />
  ),
};

export function Icon({ name, size = 18, ...rest }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
