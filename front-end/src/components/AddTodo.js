import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class AddTodo extends Component {
    handleClick() {
        const node = ReactDOM.findDOMNode(this.refs.input);
        const what_select = ReactDOM.findDOMNode(this.refs.select_tab);
        const which_tab = what_select.value.trim();
        const text = node.value.trim();
        const checked = false;
        console.log(this);
        this.props.onAddClick(text, which_tab, checked);
        node.value = '';
    }
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <select ref="select_tab" id="select-tab-2" className="select-tab">
                    <option > tab_1 </option>
                    <option > tab_2 </option>
                    <option  > tab_3 </option>
                </select>
                <button onClick={(e) => this.handleClick(e)}>
                    Add
                </button>

            </div>
        );
    }



}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};