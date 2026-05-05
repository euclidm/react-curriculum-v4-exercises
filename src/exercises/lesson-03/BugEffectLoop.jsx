//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((previous) => (previous + 1));
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
/*
  There were two things I noticed in useEffect that would cause bugs:
  (1) useEffect Parameter was missing a 2nd parameter which was the dependency. I decided to
      leave the dependency `[]` blank rather than adding `[count]` because it would render infinitely.
      Therefore, leaving the dependency blank/empty would only run once when the component `mounts`!
  (2) Adding `setCount((previous) => (previous + 1))` helps avoid stale state and helps us increment &
      render our current count in an easy + convenient manner.
*/

