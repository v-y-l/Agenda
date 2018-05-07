import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import {
  GET_PLAN_ACTION,
  DELETE_SCHEDULE_ITEM_ACTION,
  ADD_SCHEDULE_ITEM_ACTION,
} from './constants';

import {
	getPlanAction,
	setPlanKeyAction,
	setEventOptionsAction,
	setScheduleAction,
  setPlanNameAction,
  deleteScheduleItemAction,
} from './actions';

import { 
  selectPlanKey,
} from './selectors';

import rsf from 'firebase/firebaseConfig';

export function* getPlanData(api, action) {
  const plan = yield call(api.database.read, 'plan/'+action.key);

  if (plan != null) {
  	yield put(setPlanKeyAction(action.key));
  	yield put(setEventOptionsAction(plan.eventOptions));
    yield put(setScheduleAction(plan.schedule));
  	yield put(setPlanNameAction(plan.title));
  } else {
  	// TODO: implement error handling
  	console.log("Failed to get plan data!");
  }
}

export function* deleteScheduleItem(api, action) {
  // delete schedule item
  const planKey = yield select(selectPlanKey);
  const response = yield call(api.database.delete, 'plan/'+planKey+'/schedule/'+action.key);

  // update schedule redux
  const plan = yield call(api.database.read, 'plan/'+planKey);
  yield put(setScheduleAction(plan.schedule));
}

export function* addScheduleItem(api, action) {
  // delete schedule item
  const planKey = yield select(selectPlanKey);
  const scheduleItem = {
    title: action.title,
    time: action.time,
  }
  const response = yield call(api.database.create, 'plan/'+planKey+'/schedule', scheduleItem);

  // update schedule redux
  const plan = yield call(api.database.read, 'plan/'+planKey);
  yield put(setScheduleAction(plan.schedule));
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_PLAN_ACTION, getPlanData, rsf);
  yield takeLatest(DELETE_SCHEDULE_ITEM_ACTION, deleteScheduleItem, rsf);
  yield takeLatest(ADD_SCHEDULE_ITEM_ACTION, addScheduleItem, rsf);
}
