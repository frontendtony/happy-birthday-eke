import * as React from 'react';

function ScrollIndicator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={123} height={67} fill="none" {...props}>
      <rect
        width={123}
        height={123}
        rx={61.5}
        fill="url(#prefix__paint0_linear)"
        fillOpacity={0.2}
      />
      <rect
        x={13}
        y={11}
        width={97}
        height={97}
        rx={48.5}
        fill="url(#prefix__paint1_linear)"
        fillOpacity={0.2}
      />
      <path
        d="M72 44l-10-8-10 8"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={37.583}
          y1={123}
          x2={122.593}
          y2={21.798}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#4158D0" />
          <stop offset={0.505} stopColor="#C850C0" />
          <stop offset={1} stopColor="#FFCC70" />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={42.639}
          y1={108}
          x2={109.679}
          y2={28.19}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#4158D0" />
          <stop offset={0.505} stopColor="#C850C0" />
          <stop offset={1} stopColor="#FFCC70" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default React.memo(ScrollIndicator);
