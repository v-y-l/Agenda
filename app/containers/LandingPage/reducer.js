/*
 *
 * LandingPage reducer
 *
 */

import { fromJS, List, Map } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_PLANS_ACTION,
} from './constants';

const initialState = fromJS({
	plans: [],
});

const convertData = (rawData) => {
	let data = List();
	if (!rawData) {
	return data;
	}
	for (let key of Object.keys(rawData)) {
		let datum = Map({
			key: key,
			title: rawData[key]['title'],
		});
		data = data.push(datum);
	}
	return data;
};

function landingPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_PLANS_ACTION:
      return { plans: convertData(action.plans)};
    default:
      return state;
  }
}

export default landingPageReducer;
