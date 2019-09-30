import {
UPDATE_SETTINGS,
  GET_SETTINGS,
} from "./types";

export const updateSettings = (payload) => {
  return {
    type: UPDATE_SETTINGS,
    payload
  }
};

export const getSettings = () => {
  return {
    type: GET_SETTINGS
  }
};
