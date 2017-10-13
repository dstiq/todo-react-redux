import { DELETE_CHECKED } from '../ActionTypes'
import  { ADD_TODO} from '../ActionTypes'
import { CHECK_TODO } from '../ActionTypes'

export function deleteChecked () {
    return { type: DELETE_CHECKED }
}

export  function addTodo(text,which_tab, checked) {
    return {
        type: ADD_TODO,
        which_tab: which_tab,
        checked: checked,
        text: text
    }
}
export function checkTodo (index, checked) {
    return {
        type: CHECK_TODO,
        index: index,
        checked: checked
    }

}

