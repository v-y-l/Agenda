import { createSelector } from 'reselect';

/**
 * Direct selector to the planContainer state domain
 */
const selectPlanContainerDomain = (state) => state.get('planContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PlanContainer
 */

const makeSelectPlanContainer = () => createSelector(
  selectPlanContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectPlanContainer;
export {
  selectPlanContainerDomain,
};
