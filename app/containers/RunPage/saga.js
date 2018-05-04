import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  GET_PLAN_ACTION,
} from './constants';

import {
	setPlanKeyAction,
	setScheduleAction,
} from './actions';

import { 
  selectPlanKey,
} from './selectors';

import rsf from 'firebase/firebaseConfig';

export function* getPlanData(api, action) {
  const plan = yield call(api.database.read, 'plan/'+action.key);

  if (plan != null) {
  	yield put(setPlanKeyAction(action.key));
  	yield put(setScheduleAction(plan.schedule));
  } else {
  	// TODO: implement error handling
  	console.log("Failed to get plan data!");
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_PLAN_ACTION, getPlanData, rsf);
}
