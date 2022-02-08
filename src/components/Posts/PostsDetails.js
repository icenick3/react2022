import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

const PostsDetails = () => {
    const {state: post} = useLocation()
    console.log(post)
    return (
        <div>
            <p>{post.userId}</p>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button><Link to={`/posts/${post.id}/comments`} state={{...post}}>coments of Users</Link></button>
            <Outlet/>
        </div>
    );
};

export default PostsDetails;