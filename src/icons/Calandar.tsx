import * as React from 'react';

function Calandar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1.112em" viewBox="0 0 18 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 0l-.001 2h-1L4.5 4h1l-.001-2h7l.001-2h1l-.001 2h-1l.001 2h1l-.001-2H18v18H0V2.001L4.499 2 4.5 0h1zM1 19h16V7H1v12z"
        fill="url(#calendar-icon)"
      />
      <defs>
        <linearGradient
          id="calendar-icon"
          x1={5.5}
          y1={20}
          x2={19.5}
          y2={5}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#4158D0" />
          <stop offset={0.505} stopColor="#C850C0" />
          <stop offset={1} stopColor="#FFCC70" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default React.memo(Calandar);
