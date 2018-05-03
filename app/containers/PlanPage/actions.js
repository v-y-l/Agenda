/*
 *
 * PlanPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PLAN_ACTION,
} from './constants';

function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

function getPlanAction(key) {
  return {
  	type: GET_PLAN_ACTION,
  	key: key,
  }
}

export {
  defaultAction,
  getPlanAction,
};