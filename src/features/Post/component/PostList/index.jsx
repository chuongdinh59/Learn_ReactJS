import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array
};
PostList.defaultProps = {
    posts: []
}

function PostList({ posts }) {
    return (

        <ul className="post__list">
            {
                posts.map((post) =>
                    <li key={post.id} >{post.title}</li>
                )
            }

        </ul>


    );
}

export default PostList;