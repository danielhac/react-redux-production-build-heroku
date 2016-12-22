import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function makerReducer(state = initialState.makers, action) {
    switch(action.type) {
        case types.LOAD_MAKERS_SUCCESS:
            return action.makers;

        // Creates copy of existing array held in state and includes new maker saved in new array
        case types.CREATE_MAKER_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.maker)
            ];

        default:
            return state;
    }
}