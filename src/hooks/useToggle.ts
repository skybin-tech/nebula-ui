'use client';

import { useState, useCallback } from "react";

/**
 * A hook that returns a boolean state and a function to toggle it
 * @param initialValue - The initial value of the toggle (default: false)
 * @returns A tuple containing the current value and a toggle function
 */
export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  return [value, toggle];
}
