
import { fromJS } from 'immutable';
import planPageReducer from '../reducer';

describe('planPageReducer', () => {
  it('returns the initial state', () => {
    expect(planPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
