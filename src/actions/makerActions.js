// In Production, i can contain actions for creating, updating, deleting makers

import * as types from './actionTypes';
import makerApi from '../api/mockMakerApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMakersSuccess(makers) {
    return {type: types.LOAD_MAKERS_SUCCESS, makers};
}

export function createMakerSuccess(maker) {
    return {type: types.CREATE_MAKER_SUCCESS, maker};
}

export function loadMakers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return makerApi.getAllMakers().then(makers => {
            dispatch(loadMakersSuccess(makers));
        }).catch(error => {
            throw(error);
        });
    };
}

export function saveMaker(maker) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return makerApi.saveMaker(maker).then(savedMaker => {
            // Check id, Update or create maker
            // maker.id ? dispatch(updateMakerSuccess(savedMaker)) :
                dispatch(createMakerSuccess(savedMaker));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);

        });
    };
}