import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import {
	GET_PLANS_ACTION,
} from './constants';

import {
	getPlansAction
} from './actions';

import { 
  selectPlanKey,
} from './selectors';

import rsf from 'firebase/firebaseConfig';

export function* getPlansData(api, action) {
	const plans = yield call(api.database.read, 'plan/');
	console.log(plans);
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_PLANS_ACTION, getPlansData, rsf);
}
