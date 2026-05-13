// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => {
      clearInterval(storedCount);
    };
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
/*

  I noticed that setInterval was repeatedly running a function that updates the count every second. However,
  due to StrictMode, the useEffect's life cycle runs twice (Mount --> Cleanup --> Mount). Without the cleanup
  function, the first part (mount) of the life cycle was never cleared/cleaned up so the second part (mount) runs
  the useEffect again.

  To fix this bug, I decided to create a variable to store the interval from setInterval and return a cleanup
  function using clearInterval to stop the previous interval before a new interval within the lifecycle is created.

*/