import React from 'react';
import PropTypes from 'prop-types';
import "./style.scss"


function AlbumItem({ Item }) {
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={Item.imgURL} alt="" />
            </div>
            <p className="album__title">{Item.name}</p>
        </div>
    );
}

export default AlbumItem;