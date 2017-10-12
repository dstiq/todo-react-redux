import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as addTodoAction from '../actions/AddTodoAction';
import * as changeTabAction from '../actions/ChangeTabAction';
import * as checkTodoAction from '../actions/CheckTodoAction';
import * as deleteCheckedAction from '../actions/DeleteCheckedAction';



class App extends Component {
    render() {
        const { todoProp, tabProp } = this.props;
        const { addTodo }  = this.props.addTodoAction;
        const { changeTab } = this.props.changeTabActions;
        const { checkTodo } = this.props.checkTodoActions;
        const { deleteChecked }  = this.props.deleteCheckedActions;

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
        addTodoAction: bindActionCreators(addTodoAction, dispatch),
        changeTabActions: bindActionCreators(changeTabAction, dispatch),
        checkTodoActions: bindActionCreators (checkTodoAction, dispatch),
        deleteCheckedActions: bindActionCreators(deleteCheckedAction, dispatch)
    }
 }

export default connect(mapStateToProps,mapDispatchToProps)(App);