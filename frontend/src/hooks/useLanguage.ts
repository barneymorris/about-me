import { selectLangState, setLang } from "@/store/lang.slice";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useLanguage = () => {
  const dispatch = useDispatch();
  const langState = useSelector(selectLangState);
  const langCookie = Cookies.get("lang");
  const { push } = useRouter();

  useEffect(() => {
    if (!langCookie) {
      const lng = window.navigator.language;
      let result: string = "ru";

      if (lng.includes("en")) {
        result = "en";
      }

      if (lng.includes("ru")) {
        result = "ru";
      }

      if (!lng.includes("ru") && !lng.includes("en")) {
        result = "ru";
      }

      dispatch(setLang(result));
    }
  }, []);

  const setLanguage = (lng: string) => {
    dispatch(setLang(lng));
    push("/", undefined, { locale: lng });
  };

  return { setLanguage, lang: langState };
};
