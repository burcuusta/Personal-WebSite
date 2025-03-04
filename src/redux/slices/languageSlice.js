import { createSlice } from "@reduxjs/toolkit";

const translations = {
  en: {
    greeting: "Hi! 👋",
    introduction: "I'm Burcu. I'm a full-stack developer.",
    description: "I can craft solid and scalable frontend products. Let’s meet!",
    github: "GitHub",
    email: "Invite me to your team",
  },
  tr: {
    greeting: "Merhaba! 👋",
    introduction: "Ben Burcu. Full-stack geliştiriciyim.",
    description: "Sağlam ve ölçeklenebilir frontend ürünleri geliştirebilirim. Tanışalım!",
    github: "GitHub",
    email: "Beni ekibine davet et",
  },
};

const initialState = { language: "en", translations };

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
