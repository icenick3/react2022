import React, {useEffect, useState} from 'react';

import {postService} from "../../services/post.service";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.getAllPosts().then(value => setPosts(value))
    }, [])
    console.log(posts)
    return (
        <div>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
};

export default Posts;