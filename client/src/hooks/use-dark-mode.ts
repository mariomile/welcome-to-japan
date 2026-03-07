import { useEffect, useState } from "react";

const DARK_MODE_KEY = "japan-dark";

export function useDarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return localStorage.getItem(DARK_MODE_KEY) === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(DARK_MODE_KEY, String(dark));
  }, [dark]);

  return {
    dark,
    toggle: () => setDark((current) => !current),
  };
}
