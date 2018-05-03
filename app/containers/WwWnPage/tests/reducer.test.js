
import { fromJS } from 'immutable';
import wwWnPageReducer from '../reducer';

describe('wwWnPageReducer', () => {
  it('returns the initial state', () => {
    expect(wwWnPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
