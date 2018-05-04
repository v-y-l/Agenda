/*
 *
 * PlanPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_PLAN_ACTION,
  SET_PLAN_KEY_ACTION,
  SET_EVENT_OPTIONS_ACTION,
  SET_SCHEDULE_ACTION,
  DELETE_SCHEDULE_ITEM_ACTION,
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

function setPlanKeyAction(key) {
  return {
    type: SET_PLAN_KEY_ACTION,
    key: key,
  }
}

function setEventOptionsAction(eventOptions) {
  return {
    type: SET_EVENT_OPTIONS_ACTION,
    eventOptions: eventOptions,
  }
}

function setScheduleAction(schedule) {
  return {
    type: SET_SCHEDULE_ACTION,
    schedule: schedule,
  }
}

function deleteScheduleItemAction(key) {
  return {
    type: DELETE_SCHEDULE_ITEM_ACTION,
    key: key,
  }
}


export {
  defaultAction,
  getPlanAction,
  setPlanKeyAction,
  setEventOptionsAction,
  setScheduleAction,
  deleteScheduleItemAction,
};