import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import "./style.scss"
AlbumList.propTypes = {
    listItem: PropTypes.array.isRequired
};

function AlbumList({ listItem }) {
    return (
        <ul className="album-list">
            {
                listItem.map(item => (
                    <li key={item.id}>
                        {
                            <AlbumItem
                                Item={item}
                            />
                        }
                    </li>
                ))
            }
        </ul>
    );
}

export default AlbumList;