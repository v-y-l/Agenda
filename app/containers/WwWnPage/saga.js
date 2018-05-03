import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { 
	GET_WWWN_DATA_ACTION,
	ADD_WW_DATA_ACTION,
	ADD_WN_DATA_ACTION,
} from './constants';
import { 
	setWwWnKeyAction, 
	setWwWnTitleAction,
	setWwDataAction,
	setWnDataAction,
	addWwDataAction,
	addWnDataAction,
} from './actions';
import { makeSelectWwWnKey } from './selectors';
import rsf from 'firebase/firebaseConfig';

// ...args, action(pattern) from takeLatest
export function* getWwWnData(api, action) {
	const session = yield call(api.database.read, 'sessions/'+action.key);
	if (session != null) {
		yield put(setWwWnKeyAction(action.key));
		yield put(setWwWnTitleAction(session.title));
		yield put(setWwDataAction(session.ww));
		yield put(setWnDataAction(session.wn));
	}
}

export function* addWwData(api, action) {
	const sessionId = yield select(makeSelectWwWnKey());
	const key = yield call(rsf.database.create, 'sessions/'+sessionId+'/ww', {
		'comment': action.data
	});
}

export function* addWnData(api, action) {

}

// Individual exports for testing
export default function* wwwnData() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(GET_WWWN_DATA_ACTION, getWwWnData, rsf);
  yield takeLatest(ADD_WW_DATA_ACTION, addWwData, rsf);
  yield takeLatest(ADD_WN_DATA_ACTION, addWnData, rsf);
}