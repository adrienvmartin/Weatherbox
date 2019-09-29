import {
  METRIC_SWITCH,
  COLLAPSED_SWITCH,
  /*OPEN_SWITCH,
  SINGLE_LINE_SWITCH,
  RAIN_COLOUR,
  SNOW_COLOUR,
  PRECIP_COLOUR,
  UNIT_PRECIP_DAYS,
  UNIT_RAIN_DAYS,
  UNIT_SNOW_DAYS*/
} from "./types";

export const changeMetric = payload => {
  return {
    type: METRIC_SWITCH,
    payload
  };
};

export const changeCollapsed = payload => {
  return {
    type: COLLAPSED_SWITCH,
    payload,
  };
};
