/*
 *
 * WwWnPage reducer
 *
 */

import { fromJS, Map, List } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_WWWN_KEY_ACTION,
  SET_WWWN_TITLE_ACTION,
  SET_WW_DATA_ACTION,
  SET_WN_DATA_ACTION,
} from './constants';

const fixture = {
	"key": "fakekey",
	"title": "Redux Academy",
	"ww": [
		{"key" : "fakekey1", "comment": "ww1"},
		{"key" : "fakekey2", "comment": "ww2"},
		{"key" : "fakekey3", "comment": "ww3"},
	],
	"wn": [
		{"key" : "fakekey1", "comment": "wn1"},
		{"key" : "fakekey2", "comment": "wn2"},
		{"key" : "fakekey3", "comment": "wn3"},
	],
};

const api = {
	"key":"",
	"title":"",
	"ww":[],
	"wn":[],
};

const initialState = fromJS(api);

const convertData = (rawData) => {
	let data = List();
	for (let key of Object.keys(rawData)) {
		let datum = Map({
			key: key,
			comment: rawData[key]['comment'],
		});
		data = data.push(datum);
	}
	return data;
}

function wwWnPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SET_WWWN_KEY_ACTION:
      return state.set("key", action.key);
    case SET_WWWN_TITLE_ACTION:
      return state.set("title", action.title);
    case SET_WW_DATA_ACTION:
      return state.set("ww", convertData(action.data));
	case SET_WN_DATA_ACTION:
      return state.set("wn", convertData(action.data));
    default:
      return state;
  }
}

export default wwWnPageReducer;
