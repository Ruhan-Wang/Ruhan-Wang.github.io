interface FoxProps {
  className?: string;
}

export function FoxLike({ className = '' }: FoxProps) {
  return (
    <svg
      viewBox="0 0 72 40"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="fox-tail-wag"
        d="M50 29c10 6 18 1 17-8-6 5-12 2-15-3"
        fill="none"
        stroke="#D97745"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <ellipse cx="37" cy="26" rx="19" ry="10" fill="#D97745" />
      <path d="m17 18 3-13 10 10M44 15 54 5l2 15" fill="#D97745" stroke="#7C3A22" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="35" cy="17" r="13" fill="#D97745" stroke="#7C3A22" strokeWidth="2" />
      <path d="M26 20c4 0 7 2 9 8 3-6 7-8 11-8-2 7-6 10-11 10s-8-3-9-10Z" fill="#FFF8ED" />
      <circle cx="30" cy="16" r="1.7" fill="#38251F" />
      <circle cx="41" cy="16" r="1.7" fill="#38251F" />
      <circle cx="35.5" cy="23" r="2" fill="#38251F" />
    </svg>
  );
}

export function SleepingFox({ className = '' }: FoxProps) {
  return (
    <svg
      viewBox="0 0 150 64"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className="sleeping-fox-body">
        <path d="M112 45c18 10 31 1 29-16-8 9-19 8-29 1" fill="#D97745" stroke="#7C3A22" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="82" cy="39" rx="43" ry="19" fill="#D97745" stroke="#7C3A22" strokeWidth="3" />
        <path d="m31 30 5-20 15 15M61 24 75 11l1 22" fill="#D97745" stroke="#7C3A22" strokeWidth="3" strokeLinejoin="round" />
        <ellipse cx="53" cy="37" rx="25" ry="20" fill="#D97745" stroke="#7C3A22" strokeWidth="3" />
        <path d="M34 40c7-1 13 2 19 12 6-10 13-13 21-12-5 11-11 16-21 16S38 51 34 40Z" fill="#FFF8ED" />
        <path d="M42 36c3 3 6 3 9 0M57 36c3 3 6 3 9 0" fill="none" stroke="#38251F" strokeWidth="2.5" strokeLinecap="round" />
        <path d="m50 47 3-2 3 2-3 3Z" fill="#38251F" />
      </g>
      <path d="M126 12h10l-10 10h10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity=".35" />
      <path d="M137 2h8l-8 8h8" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" opacity=".22" />
    </svg>
  );
}
