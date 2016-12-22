// In Production, i can contain actions for creating, updating, deleting authors

import MakerApi from '../api/mockMakerApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMakersSuccess(makers) {
    return {type: types.LOAD_MAKERS_SUCCESS, makers};
}

export function loadMakers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return MakerApi.getAllMakers().then(makers => {
            dispatch(loadMakersSuccess(makers));
        }).catch(error => {
            throw(error);
        });
    };
}
