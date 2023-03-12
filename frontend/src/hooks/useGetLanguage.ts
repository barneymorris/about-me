import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";

export const useLanguage = () => {
  useEffect(() => {
    if (!Cookies.get("lang")) {
      const lng = window.navigator.language;
      let result: string = "ru-RU";

      if (lng.includes("en")) {
        result = "en-US";
      }

      if (lng.includes("ru")) {
        result = "ru-RU";
      }

      if (!lng.includes("ru") && !lng.includes("en")) {
        result = "ru-RU";
      }

      Cookies.set("lang", result);
    }
  }, []);

  const setLanguage = useCallback((lng: string) => {
    Cookies.set("lang", lng);
  }, []);

  const getLanguage = useCallback(() => {
    return Cookies.get("lang") || "ru-RU";
  }, []);

  return { setLanguage, getLanguage };
};
