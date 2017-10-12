import { ADD_TODO, CHECK_TODO, DELETE_CHECKED } from '../ActionTypes'

export default function operatingWithTodo (state = [],action) {
    switch (action.type){
        case ADD_TODO:
            return [...state, {
                text: action.text,
                which_tab: action.which_tab,
                completed: false,
                checked: action.checked
            }];
        case CHECK_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    checked: action.checked
                }),
                ...state.slice(action.index + 1)
            ];
        case DELETE_CHECKED:
            return state.filter( item => !item.checked );
        default:
                return state;
    }
}