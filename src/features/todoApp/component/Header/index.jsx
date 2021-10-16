import React, { useState } from 'react';
import PropTypes from 'prop-types';

Header.propTypes = {
    handleSubmit: PropTypes.func,
};

Header.defaultProps = {
    handleSubmit: null,
};
function Header({ handleSubmit }) {
    const [input, setInput] = useState("")
    const handleSubmitInCo = (value) => {
        if (!handleSubmit || value === "") return
        handleSubmit(value)
        setInput("")
    }
    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus
                value={input} onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => {
                    if (e.keyCode === 13)
                        handleSubmitInCo(input)
                }
                }
            />
        </header>
    );

}

export default Header;