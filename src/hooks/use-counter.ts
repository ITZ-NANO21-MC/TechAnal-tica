"use client";

import { useState, useEffect, useRef } from 'react';

export function useCounter(endValue: number, duration: number) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let start = 0;
    const end = endValue;
    if (end === 0) {
      setCount(0);
      return;
    }

    const totalFrames = Math.round(duration / (1000 / 60));
    const increment = end / totalFrames;

    const counter = () => {
      start += increment;
      if (start < end) {
        setCount(start);
        ref.current = requestAnimationFrame(counter);
      } else {
        setCount(end);
      }
    };

    ref.current = requestAnimationFrame(counter);

    return () => {
      if (ref.current) {
        cancelAnimationFrame(ref.current);
      }
    };
  }, [endValue, duration]);

  return count;
}
