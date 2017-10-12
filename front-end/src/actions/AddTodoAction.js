import  { ADD_TODO} from '../ActionTypes'

export  function addTodo(text,which_tab, checked) {
    return {
            type: ADD_TODO,
            which_tab: which_tab,
            checked: checked,
            text: text
        }

}

