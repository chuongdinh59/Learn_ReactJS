import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PostList from './component/PostList';
import { useState } from 'react/cjs/react.development';
import queryString from 'query-string'
import Pagination from './component/Pagination';
PostFeature.propTypes = {

};

function PostFeature() {
    const [posts, setPosts] = useState([])
    const [pagination, setPagination] = useState({
        _limit: 10,
        _page: 1,
        _totalRows: 11
    })
    const [filter, setFilter] = useState({
        _limit: 10,
        _page: 1,
    })
    useEffect(() => {
        async function getPost() {
            try {
                const param = queryString.stringify(filter)
                const requestURL =
                    `http://js-post-api.herokuapp.com/api/posts?${param}`
                const response = await fetch(requestURL)
                const responseData = await response.json()

                const { data, pagination } = responseData
                setPosts(data)
                setPagination(pagination)
            } catch (error) {
                console.log(error.message);
            }
        }
        getPost()
    }, [filter])


    const handleChangePage = (newPage) => {
        const newFilter = {
            ...filter,
            _page: newPage
        }
        setFilter(newFilter)
    }
    return (
        <>
            <PostList posts={posts} />
            <Pagination pagination={pagination}
                onChangePage={handleChangePage}
            />
        </>
    );
}

export default PostFeature;