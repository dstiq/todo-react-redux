import { SET_VISIBLE_TAB, SHOW_TAB1 } from '../ActionTypes';

const initialState = SHOW_TAB1;

export default function operatingWithTab (state = initialState,action) {
    switch (action.type){
        case SET_VISIBLE_TAB:
            return action.which_tab_to_change;

        default:
            return state;
    }
}
