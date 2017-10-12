import { SET_VISIBLE_TAB } from '../ActionTypes';

export function changeTab(which_tab_to_change) {
    return {
            type: SET_VISIBLE_TAB,
            which_tab_to_change: which_tab_to_change
        }

}