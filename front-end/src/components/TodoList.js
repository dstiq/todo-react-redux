import React, { Component } from 'react';
import Todo from './Todo';
import PropTypes from 'prop-types';
import {SHOW_TAB1} from '../ActionTypes';

export default class TodoList extends Component {
    render() {
        let props = this.props;
        let what_shouldBe_rendered;
        let hash = window.location.hash;

        let tab_index = props.which_tab === 'tab_1' || props.which_tab === SHOW_TAB1 || hash === '#tab_1' ? 'tab_1' :
            props.which_tab === 'tab_2' || hash === '#tab_2' ? 'tab_2' :
                props.which_tab === 'tab_3' || hash === '#tab_3' ? 'tab_3' :
                    'tab_1' ;


            what_shouldBe_rendered = props.todos ?   props.todos.map((todo, index) => {
                        if (todo.which_tab === tab_index) {
                            return(
                            <label key={index}>
                                <Todo {...todo}
                                      onClick={() => this.props.onCheckToDo(index)}
                                />
                                <input
                                    checked={todo.checked}
                                    onChange={ () => this.onInputHandler(index, !todo.checked) }
                                    type="checkbox" ref="check_todos"/>
                            </label>
                            )
                        }
                    }) : '';
        return (
            <div>
                <button onClick={ () => this.onButtonHandler('tab_1')} ref="button_tab_1"> tab_1 </button>
                <button onClick={ () => this.onButtonHandler('tab_2')} ref="button_tab_2"> tab_2 </button>
                <button onClick={ () => this.onButtonHandler('tab_3')} ref="button_tab_3"> tab_3 </button>
                <div ref = {tab_index}>
                    <ul>
                        {what_shouldBe_rendered}
                    </ul>
                </div>
                <button ref="button_todo_delete" onClick={::this.onClickHandler}>delete todos</button>
            </div>
        );
    }
    onClickHandler () {
                this.props.deleteCheckedTodos();
    }
    onInputHandler(checked_index,checked){
        this.props.onCheckToDo(checked_index, checked);
    }
    onButtonHandler(what_tab){
        console.log(this);
        this.props.changeTabClick(what_tab);
        window.location.href = '#' + what_tab
    }

}

TodoList.propTypes = {
    deleteCheckedTodos: PropTypes.func.isRequired,
    onCheckToDo: PropTypes.func.isRequired,
    which_tab: PropTypes.string.isRequired,
    changeTabClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        which_tab: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired
};