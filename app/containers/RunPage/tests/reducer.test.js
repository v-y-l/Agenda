
import { fromJS } from 'immutable';
import runPageReducer from '../reducer';

describe('runPageReducer', () => {
  it('returns the initial state', () => {
    expect(runPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
