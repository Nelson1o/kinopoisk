import { useRef, useCallback } from "react";

export const useIntesection = (onIntersect: () => void) => {
  const unsubscribe = useRef(() => {});

  // eslint-disable-next-line react-hooks/preserve-manual-memoization
  return useCallback((el: HTMLDivElement | null) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((intersection) => {
        if (intersection.isIntersecting) {
          onIntersect();
        }
      });
    });

    if (el) {
      observer.observe(el);
      unsubscribe.current = () => observer.disconnect();
    } else {
      unsubscribe.current();
    }
  }, []);
};
