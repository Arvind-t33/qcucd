"use client";
import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current);
          }
        } else {
          timeoutIdRef.current = setTimeout(() => {
            setIsVisible(false);
          },1000); // 8 seconds delay
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i * 0.1), // Adjust this value as needed
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
};