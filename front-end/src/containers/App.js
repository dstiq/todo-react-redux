import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../actions/todoActions';
import * as TabActions from '../actions/tabActions';

class App extends Component {
    render() {
        const { todoProp, tabProp } = this.props;
        const { addTodo, checkTodo, deleteChecked } = this.props.todoActions;
        const { changeTab } = this.props.tabActions;

        return (
            <div>
                <AddTodo
                    result={this}
                    onAddClick={addTodo} />
                <TodoList
                    which_tab={ tabProp }
                    todos={ todoProp }
                    changeTabClick={ changeTab }
                    onCheckToDo={ checkTodo }
                    deleteCheckedTodos={ deleteChecked }
                />
            </div>
        );
    }
}

App.propTypes = {
    todoProp: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        which_tab: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
};

function mapStateToProps(state) {
    return {
        todoProp: state.operatingWithTodo,
        tabProp: state.operatingWithTab
    }
}
 function mapDispatchToProps(dispatch) {
    return {
        tabActions: bindActionCreators(TabActions, dispatch),
        todoActions: bindActionCreators(TodoActions, dispatch)
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);