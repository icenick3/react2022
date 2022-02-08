import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <Link to={`/posts/${post.id}`} state={{...post}}>{post.id} {post.title}</Link>
        </div>
    );
};

export default Post;