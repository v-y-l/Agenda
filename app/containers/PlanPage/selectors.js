import { createSelector } from 'reselect';

/**
 * Direct selector to the planPage state domain
 */
const selectPlanPageDomain = (state) => state.get('planPage');

/**
 * Other specific selectors
 */
const selectPlanKey = (state) => state.get('planPage').get('planKey');


/**
 * Default selector used by PlanPage
 */

const makeSelectPlanPage = () => createSelector(
  selectPlanPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectPlanPage;
export {
  selectPlanPageDomain,
  selectPlanKey,
};
