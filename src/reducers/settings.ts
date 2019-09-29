import { INITIAL_STATE } from "../components/GridSettings";
import {
  METRIC_SWITCH,
  COLLAPSED_SWITCH,
  OPEN_SWITCH,
} from "../actions/types";

const initialState = INITIAL_STATE;

const settings = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case METRIC_SWITCH:
      return {
        ...state,
        metric: payload,
      };
    case COLLAPSED_SWITCH:
      return {
        ...state,
        collapsed: payload,
      };
    case OPEN_SWITCH:
      return {
        ...state,
        open: payload,
      };
    default:
      return state;
  }
};

export default settings;
