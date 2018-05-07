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

// converts data from key: {title, time} to {key, title, time}
const convertData = (rawData) => {
	let data = List();
  if (!rawData) {
    return data;
  }
	for (let key of Object.keys(rawData)) {
		let datum = Map({
			key: key,
			title: rawData[key]['title'],
			time: rawData[key]['time'],
		});
		data = data.push(datum);
	}
	return data;
}

function planPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PLAN_KEY_ACTION:
      return state.set("planKey",action.key);
    case SET_EVENT_OPTIONS_ACTION:
      return state.set("eventOptions",convertData(action.eventOptions));
    case SET_SCHEDULE_ACTION:
      return state.set("schedule",convertData(action.schedule));
    default:
      return state;
  }
}

export default planPageReducer;
