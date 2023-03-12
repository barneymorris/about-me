import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";

export interface LangState {
  lang: string;
  locales: any;
}

const initialState: LangState = {
  lang: "ru-RU",
  locales: {},
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang(state, { payload }: PayloadAction<string>) {
      state.lang = payload;
    },

    setLocales(state, { payload }: PayloadAction<any>) {
      state.locales = payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLang, setLocales } = langSlice.actions;

export const selectLangState = (state: AppState) => state.lang.lang;
export const selectLocalesState = (state: AppState) => state.lang.locales;

export default langSlice.reducer;
