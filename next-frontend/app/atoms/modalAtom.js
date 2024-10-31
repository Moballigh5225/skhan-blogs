// modalAtom.js
import { atom } from "recoil";

export const modalState = atom({
  key: "modalState", // Unique ID for this atom
  default: null, // Default value (initially no content)
});
