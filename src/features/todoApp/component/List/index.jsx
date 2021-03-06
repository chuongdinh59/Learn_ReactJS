import PropTypes from 'prop-types';
import React from 'react';
import Item from '../Item';

List.propTypes = {
    todos: PropTypes.array.isRequired
};

function List({ todos, toggleAll, toggleItem, removeItem, updateTodo }) {

    const checked = todos.filter(todo => {
        return todo.completed === true
    }).length === todos.length

    function toggleCheck(value) {
        toggleAll(value)
    }
    return (
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox"
                checked={checked}
                onChange={(e) => toggleCheck(e.target.checked)}

            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    todos.map((todo, index) => (
                        <Item todo={todo}
                            toggleItem={toggleItem}
                            removeItem={removeItem}
                            index={index}
                            updateTodo={updateTodo}

                        />
                    )
                    )
                }
            </ul>
        </section>
    );
}

export default List;

