import React from 'react';
import css from "./PostsOfUser.module.css";

const PostOfUser = ({post}) => {
    return (
        <div className={css.post}>
            <p>{post.id}) {post.title} </p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostOfUser;