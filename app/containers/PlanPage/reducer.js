/*
 *
 * PlanPage reducer
 *
 */

import { fromJS, List, Map } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
	planKey: "fake-key",
	eventOptions: [],
	schedule: [],
});

function planPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default planPageReducer;
