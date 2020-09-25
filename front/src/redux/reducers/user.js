/**
 * Reducer receives the action and modifies the state.
 */

import { LOGIN_SUCCESS } from '../actions/types';

const initialState = {
    
};

export default function(state = initialState, action){
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state, 
                    token: action.token
                
            }
        default:
            return state;
    }
}
