import { INITIAL_STATE } from "../components/GridSettings";
import {
  METRIC_SWITCH,
  COLLAPSED_SWITCH,
  OPEN_SWITCH,
  SINGLE_LINE_SWITCH,
  RAIN_COLOUR,
  SNOW_COLOUR,
  PRECIP_COLOUR,
  UNIT_PRECIP_DAYS,
  UNIT_RAIN_DAYS,
  UNIT_SNOW_DAYS
} from "../actions/types";

const initialState = INITIAL_STATE;

const settings = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case METRIC_SWITCH:
      return {
        ...state,
        metric: payload
      };
    case COLLAPSED_SWITCH:
      return {
        ...state,
        collapsed: payload
      };
    case OPEN_SWITCH:
      return {
        ...state,
        open: payload
      };
    case SINGLE_LINE_SWITCH:
      return {
        ...state,
        singleLine: payload
      };
    case RAIN_COLOUR:
      return {
        ...state,
        rainColour: payload
      };
    case SNOW_COLOUR:
      return {
        ...state,
        snowColour: payload
      };
    case PRECIP_COLOUR:
      return {
        ...state,
        precipColour: payload
      };
    case UNIT_PRECIP_DAYS:
      return {
        ...state,
        unitPrecipDays: payload
      };
    case UNIT_RAIN_DAYS:
      return {
        ...state,
        unitRainDays: payload
      };
    case UNIT_SNOW_DAYS:
      return {
        ...state,
        unitSnowDays: payload
      };
    default:
      return state;
  }
};

export default settings;
