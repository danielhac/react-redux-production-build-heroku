import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function makerReducer(state = initialState.makers, action) {
    switch(action.type) {
        case types.LOAD_MAKERS_SUCCESS:
            return action.makers;

        default:
            return state;
    }
}