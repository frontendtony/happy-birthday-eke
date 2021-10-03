import { RefObject, useEffect, useState } from 'react';

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement> | null,
  threshold: number = 0,
) {
  const [hasAppeared, setHasAppeared] = useState(false); // for one-time updates
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref?.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) setIntersecting(true);
          else setIntersecting(false);
        },
        { threshold },
      );
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    if (isIntersecting) setHasAppeared(true);
  }, [isIntersecting]);

  return { isIntersecting, hasAppeared };
}
