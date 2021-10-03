import * as React from 'react';

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 17 18" fill="none" {...props}>
      <path d="M16.5 9l-16 9V0l16 9z" fill="#fff" />
    </svg>
  );
}

export default React.memo(Play);
