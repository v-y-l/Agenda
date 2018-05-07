/*
 *
 * LandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PLANS_ACTION,
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

export  {
	defaultAction,
	getPlansAction,
}