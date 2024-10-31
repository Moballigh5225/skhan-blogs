import { atom } from "recoil";

export const parentState = atom({
  key: "parentState",
  default: {
    poetry: [],
    articles: [],
    bookReviews: [],
    books: [],
  },
});
export const loadingState = atom({
  key: "loadingState",
  default: false, // Initially not loading
});
