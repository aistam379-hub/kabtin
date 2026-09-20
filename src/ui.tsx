import type { ReactNode } from 'react';

const PATHS: Record<string, ReactNode> = {
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="3" />
      <path d="M9 7l1.5-3h3L15 7" />
      <circle cx="12" cy="13.5" r="3.5" />
    </>
  ),
  chat: <path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l.9-4.4A8 8 0 1 1 20 12z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="3" />
      <path d="M4 10h16M9 3v4M15 3v4" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2.5" />
      <path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="M7 11l5 5 5-5" />
      <path d="M5 20h14" />
    </>
  ),
  scale: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="4" />
      <path d="M8 10.5a4 4 0 0 1 8 0" />
      <path d="M12 10.5V14" />
    </>
  ),
};

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
