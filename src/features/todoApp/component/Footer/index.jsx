import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
Footer.propTypes = {
    updateItem: PropTypes.array
};

Footer.defaultProps = {
    updateItem: []
};

function Footer({ todos, removeCheck, handleAll, handleActive, handleCompleted }) {
    function handleRemoveCheck() {

    }
    return (
        <footer className="footer">
            <span className="todo-count"><strong>{
                todos.filter(todo => todo.completed === true).length
            }</strong> item left</span>
            <ul className="filters">
                <li>
                    <a className="selected" onClick={
                        (e) => {
                            handleAll()
                            document.querySelector(".selected").classList.remove("selected")
                            e.currentTarget.classList.add("selected")
                        }
                    } href="#/">All</a>
                </li>
                <li>
                    <a onClick={(e) => {
                        handleActive()
                        document.querySelector(".selected").classList.remove("selected")
                        e.currentTarget.classList.add("selected")
                    }
                    } href="#/active">Active</a>
                </li>
                <li>
                    <a onClick={(e) => {
                        handleCompleted()
                        document.querySelector(".selected").classList.remove("selected")
                        e.currentTarget.classList.add("selected")
                    }
                    } href="#/completed">Completed</a>
                </li>
            </ul>
            <button
                className={classnames({
                    "clear-completed": true,
                    hidden: todos.filter(todo => todo.completed === true).length <= 0
                })}
                onClick={() => removeCheck()}
            >Clear completed</button>
        </footer>
    );
}

export default Footer;