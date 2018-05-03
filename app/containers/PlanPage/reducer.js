/*
 *
 * PlanPage reducer
 *
 */

import { fromJS, List, Map } from 'immutable';
import {
  DEFAULT_ACTION,
  GET_PLAN_ACTION,
  SET_PLAN_KEY_ACTION,
  SET_EVENT_OPTIONS_ACTION,
  SET_SCHEDULE_ACTION,
} from './constants';

const initialState = fromJS({
	planKey: "",
	eventOptions: [],
	schedule: [],
});

function planPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PLAN_KEY_ACTION:
      return state.set("planKey",action.key);
    case SET_EVENT_OPTIONS_ACTION:
      return state;
    case SET_SCHEDULE_ACTION:
      return state;
    default:
      return state;
  }
}

export default planPageReducer;
