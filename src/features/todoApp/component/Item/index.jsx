import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
Item.propTypes = {
    todo: PropTypes.object,
    removeItem: PropTypes.func,
    toggleItem: PropTypes.func,
    index: PropTypes.number
};
Item.defaultProps = {
    todo: {},
    removeItem: null,
    toggleItem: null,
    index: 0
};
function Item({ todo, toggleItem, index, removeItem, updateTodo }) {
    const [value, setValue] = useState('')

    function handleToggle() {
        toggleItem(todo.completed, index)
    }
    function handleRemove(index) {
        removeItem(index)
    }
    function handleDoubleClick(element) {
        const elementisEdit = document.querySelector("li.editing")
        if (elementisEdit) elementisEdit.classList.remove("editing")
        element.classList.add('editing')
        setValue(todo.title)
    }
    function changeValue(value) {
        setValue(value)
    }
    function handleupdateTodo(value, index) {
        updateTodo(value, index);
    }
    return (
        <li className={classnames({
            completed: todo.completed === true
        })}
            onDoubleClick
            ={(e) => handleDoubleClick(e.currentTarget, todo)}
            onKeyUp={(e) => {
                if (e.keyCode === 27 || e.keyCode === 13)
                    e.currentTarget.classList.remove('editing')
            }}
            onBlur={(e) => e.currentTarget.classList.remove('editing')}
        >
            <div className="view">
                <input className="toggle" type="checkbox"
                    checked={todo.completed === true}
                    onChange={() => handleToggle(todo.completed, index)}
                />
                <label>{todo.title}</label>
                <button className="destroy"
                    onClick={() => handleRemove(index)}
                ></button>
            </div>
            <input className="edit" autoFocus
                value={value}
                onChange={(e) => changeValue(e.target.value)}
                onKeyUp={(e) => {
                    if (e.keyCode === 13)
                        handleupdateTodo(value, index)
                }}
            />
        </li>
    );
}

export default Item;