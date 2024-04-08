// selectors.js
import { selector } from "recoil";
import { messagesState, searchState, selectedConversationState } from "./atoms";

export const setMessages = selector({
  key: "setMessages",
  set: ({ set }, messages) => {
    set(messagesState, messages);
  },
  get: ({ get }) => {
    return get(messagesState);
  },
});

export const setSelectedConversation = selector({
  key: "setSelectedConversation",
  set: ({ set }, selectedConversation) => {
    set(selectedConversationState, selectedConversation);
  },
  get: ({ get }) => {
    return get(selectedConversationState);
  },
});

export const setSearch = selector({
  key: "setSearch",
  set: ({ set }, search) => {
    set(searchState, search);
  },
  get: ({ get }) => {
    return get(searchState);
  },
});
