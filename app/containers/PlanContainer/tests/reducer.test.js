
import { fromJS } from 'immutable';
import planContainerReducer from '../reducer';

describe('planContainerReducer', () => {
  it('returns the initial state', () => {
    expect(planContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
