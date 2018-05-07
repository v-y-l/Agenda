/*
 *
 * LandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PLANS_ACTION,
  SET_PLANS_ACTION,
} from './constants';

function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

function getPlansAction() {
  return {
    type: GET_PLANS_ACTION,
  };
}

function setPlansAction(plans) {
  return {
    type: SET_PLANS_ACTION,
    plans: plans,
  };
}

export  {
	defaultAction,
	getPlansAction,
  setPlansAction,
}