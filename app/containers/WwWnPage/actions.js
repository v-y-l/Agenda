/*
 *
 * WwWnPage actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_WWWN_KEY_ACTION,
  GET_WWWN_DATA_ACTION,
  SET_WWWN_TITLE_ACTION,
  SET_WW_DATA_ACTION,
  SET_WN_DATA_ACTION,
  ADD_WW_DATA_ACTION,
  ADD_WN_DATA_ACTION,
} from './constants';

function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

function setWwWnKeyAction(key) {
  return {
  	type: SET_WWWN_KEY_ACTION,
  	key: key,
  }
}

function getWwWnDataAction(key) {
  return {
    type: GET_WWWN_DATA_ACTION,
    key: key,
  }
}

function setWwWnTitleAction(title) {
  return {
    type: SET_WWWN_TITLE_ACTION,
    title: title,
  }
}

function setWwDataAction(data) {
  return {
    type: SET_WW_DATA_ACTION,
    data: data,
  }
}

function setWnDataAction(data) {
  return {
    type: SET_WN_DATA_ACTION,
    data: data,
  }
}

function addWwDataAction(data) {
  return {
    type: ADD_WW_DATA_ACTION,
    data: data,
  }
}

function addWnDataAction(data) {
  return {
    type: ADD_WN_DATA_ACTION,
    data: data,
  }
}

export {
  defaultAction,
  setWwWnKeyAction,
  getWwWnDataAction,
  setWwWnTitleAction,
  setWwDataAction,
  setWnDataAction,
  addWwDataAction,
  addWnDataAction,
}