import { CHANGE_SEARCH_FIELD } from "./constants";

export const searchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});