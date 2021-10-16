import React from 'react';
import PropTypes from 'prop-types';
Pagination.prototype = {
    panigation: PropTypes.object
}


function Pagination(props) {
    const { pagination, onChangePage } = props
    const { _limit, _page, _totalRows } = pagination
    const totalPages = Math.ceil(_totalRows / _limit)

    function handleChange(newPage) {
        onChangePage(newPage)
    }
    return (
        <div className="page__constrol">
            <button
                disabled={_page === 1}
                onClick={() => handleChange(_page - 1)}>
                previous</button>
            <button
                disabled={_page === totalPages}
                onClick={() => handleChange(_page + 1)}>
                next</button>
        </div>
    );
}

export default Pagination;