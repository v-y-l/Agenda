import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import {
	GET_PLAN_ACTION,
} from './constants';

import {
	getPlanAction,
} from './actions';

import rsf from 'firebase/firebaseConfig';

export function* getPlanData(api, action) {
  const plan = yield call(api.database.read, 'plan/'+action.key);
  console.log(plan);
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_PLAN_ACTION, getPlanData, rsf);
}
