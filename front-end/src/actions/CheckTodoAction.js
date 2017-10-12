import { CHECK_TODO } from '../ActionTypes'


export function checkTodo (index, checked) {
    return {
            type: CHECK_TODO,
            index: index,
            checked: checked
        }

}

