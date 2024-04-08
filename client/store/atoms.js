import { atom } from "recoil";

export const messagesState = atom({
  key: "messagesState",
  default: [],
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const selectedConversationState = atom({
  key: "selectedConversationState",
  default: [],
});
