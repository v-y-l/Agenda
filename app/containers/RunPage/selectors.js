import { createSelector } from 'reselect';

/**
 * Direct selector to the runPage state domain
 */
const selectRunPageDomain = (state) => state.get('runPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RunPage
 */

const makeSelectRunPage = () => createSelector(
  selectRunPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectRunPage;
export {
  selectRunPageDomain,
};
