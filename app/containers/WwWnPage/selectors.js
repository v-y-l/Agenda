import { createSelector } from 'reselect';

/**
 * Direct selector to the wwWnPage state domain
 */
const selectWwWnPageDomain = (state) => state.get('wwWnPage');

/**
 * Other specific selectors
 */

// createSelector(a, b, c, ..., (a, b, c, ...) => has access to a, b, c, ... )
const makeSelectWwWnKey = () => createSelector(
  selectWwWnPageDomain,
  WwWnState => WwWnState.get('key')
);

const makeSelectWwWnTitle = () => createSelector(
  selectWwWnPageDomain,
  WwWnState => WwWnState.get('title')
);

const makeSelectWwComments = () => createSelector(
  selectWwWnPageDomain,
  WwWnState => WwWnState.get('ww').toJS(),
)

const makeSelectWnComments = () => createSelector(
  selectWwWnPageDomain,
  WwWnState => WwWnState.get('wn').toJS(),
)

/**
 * Default selector used by WwWnPage
 */

const makeSelectWwWnPage = () => createSelector(
  selectWwWnPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectWwWnPage;
export {
  makeSelectWwWnKey,
  makeSelectWwWnTitle,
  makeSelectWwComments,
  makeSelectWnComments
};
